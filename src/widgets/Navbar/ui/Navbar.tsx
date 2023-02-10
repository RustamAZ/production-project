import React from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

interface NavbarLink {
    href: string,
    name: string,
}

type NavbarConfig = NavbarLink[];

const navbarConfig: NavbarConfig = [
    {
        href: '/',
        name: 'Главная',
    },
    {
        href: '/about',
        name: 'О нас',
    },
];

export const Navbar = (props: NavbarProps) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <ul className={cls.list}>
                {navbarConfig.map((link) => (
                    <li className={cls.item} key={link.name}>
                        <AppLink theme={AppLinkTheme.SECONDARY} to={link.href}>{link.name}</AppLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};
