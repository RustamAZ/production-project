import React, { memo } from 'react';

import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import Light from 'shared/assets/icons/light.svg';
import Dark from 'shared/assets/icons/dark.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    console.log('render Theme');
    return (
        <Button
            className={ClassNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <Dark /> : <Light />}
        </Button>
    );
});
