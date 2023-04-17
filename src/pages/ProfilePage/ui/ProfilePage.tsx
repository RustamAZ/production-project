import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateError,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from 'entities/Profile';
import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className = '' } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateError);
    const numberRegex = /^\d+$/;

    const validatetErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
        [ValidateProfileError.INCORRET_COUNTRY]: t('Некоректный регион'),
        [ValidateProfileError.INCORRET_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRET_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    };

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const OnChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            first: value || '',
        }));
    }, [dispatch]);

    const OnChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            lastname: value || '',
        }));
    }, [dispatch]);

    const OnChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            age: numberRegex.test(value) && value[0] !== '' ? Number(value || 0) : 0,
        }));
    }, [dispatch]);

    const OnChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            city: value || '',
        }));
    }, [dispatch]);

    const OnChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            username: value || '',
        }));
    }, [dispatch]);

    const OnChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value || '',
        }));
    }, [dispatch]);

    const OnChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const OnChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={ClassNames('', {}, [className])}>
                <ProfilePageHeader />
                {
                    Boolean(validateErrors?.length) && validateErrors.map(
                        (err) => (
                            <Text
                                key={err}
                                theme={TextTheme.ERROR}
                                text={validatetErrorTranslates[err]}
                            />
                        ),
                    )
                }
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    OnChangeLastname={OnChangeLastname}
                    OnChangeFirstname={OnChangeFirstname}
                    OnChangeAge={OnChangeAge}
                    OnChangeCity={OnChangeCity}
                    OnChangeAvatar={OnChangeAvatar}
                    OnChangeUsername={OnChangeUsername}
                    OnChangeCurrency={OnChangeCurrency}
                    OnChangeCountry={OnChangeCountry}
                    readonly={readonly}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
