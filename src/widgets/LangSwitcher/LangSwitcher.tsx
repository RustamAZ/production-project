import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from "shared/lib/ClassNames/ClassNames";

import cls from "./LangSwitcher.module.scss";
import { Button, ThemeButton } from 'shared/ui/Button/Button';


interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const {
        className,
    } = props;

    
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggle} className={ClassNames(cls.LangSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
    )
}


