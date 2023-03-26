import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Button } from 'shared/ui/Button/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = (props: PageErrorProps) => {
    const { className = '' } = props;
    const [t] = useTranslation();

    const realoadPage = () => {
        window.location.reload();
    };

    return (
        <div className={ClassNames(cls.PageError, {}, [className])}>
            <p>{t('Произола непредвиденная ошибка')}</p>
            <Button onClick={realoadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
