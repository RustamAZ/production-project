import React, { useState } from 'react';

import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollpsed] = useState(false);

    const onToggle = () => {
        setCollpsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={ClassNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
