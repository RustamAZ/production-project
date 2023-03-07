import { RoutesPath } from 'shared/config/routesConfig/routesConfig';
import React from 'react';
import Home from 'shared/assets/icons/home.svg';
import About from 'shared/assets/icons/about.svg';
import Profile from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutesPath.main,
        text: 'Главная',
        Icon: Home,
    },
    {
        path: RoutesPath.about,
        text: 'О нас',
        Icon: About,
    },
    {
        path: RoutesPath.profile,
        text: 'Профиль',
        Icon: Profile,
    },
];
