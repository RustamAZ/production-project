import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage = memo((props: NotFoundPageProps) => {
    const { className = '' } = props;

    const { t } = useTranslation();

    return (
        <div className={ClassNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
});

export default NotFoundPage;
