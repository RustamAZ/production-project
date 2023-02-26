import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const {
        className,
        short,
    } = props;

    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={ClassNames('', {}, [className])}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
