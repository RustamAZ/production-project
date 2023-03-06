import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme
}

export const Text = (props: TextProps) => {
    const {
        className,
        title, text,
        theme = TextTheme.PRIMARY,
    } = props;
    const { t } = useTranslation();

    const mods = {
        [cls[theme]]: true,
    };

    return (
        <div className={ClassNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{t(`${title}`)}</p>}
            {text && <p className={cls.text}>{t(`${text}`)}</p>}
        </div>
    );
};
