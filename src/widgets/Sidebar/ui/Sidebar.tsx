import React, { useState } from 'react';

import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';

import { RoutesPath } from 'shared/config/routesConfig/routesConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import Home from 'shared/assets/icons/home.svg';
import About from 'shared/assets/icons/about.svg';

import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollpsed] = useState(false);
    const [t] = useTranslation();

    const onToggle = () => {
        setCollpsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <ul className={cls.list}>
                <li className={cls.item} key={1}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutesPath.main}
                        className={cls.link}
                    >
                        <Home className={cls.icon} />
                        <span>{t('Главная')}</span>
                    </AppLink>
                </li>
                <li className={cls.item} key={2}>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutesPath.about}
                        className={cls.link}
                    >
                        <About className={cls.icon} />
                        <span>{t('О нас')}</span>
                    </AppLink>
                </li>
            </ul>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={SizeButton.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={ClassNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
};
