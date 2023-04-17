import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const { className = '' } = props;

    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadOnly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, []);

    const onCanselEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, []);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, []);

    return (
        <div className={ClassNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль')} />

            {
                readonly
                    ? (
                        <Button
                            onClick={onEdit}
                            className={cls.editBtn}
                            theme={ThemeButton.OUTLINE}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <>
                            <Button
                                onClick={onCanselEdit}
                                className={cls.editBtn}
                                theme={ThemeButton.OUTLINE_RED}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                onClick={onSave}
                                className={cls.saveBtn}
                                theme={ThemeButton.OUTLINE}
                            >
                                {t('Сохранить')}
                            </Button>

                        </>

                    )
            }
        </div>
    );
};
