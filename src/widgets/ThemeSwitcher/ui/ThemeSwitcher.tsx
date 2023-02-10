import React from 'react';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import Light from 'shared/assets/icons/light.svg';
import Dark from 'shared/assets/icons/dark.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={ClassNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <Light /> : <Dark />}
        </Button>
    );
};
