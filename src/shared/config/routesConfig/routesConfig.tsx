import { AboutPage } from 'pages/AboutPage';
import { ArticalDetailsPage } from 'pages/ArticalDetailsPage';
import { ArticalsPage } from 'pages/ArticalsPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICALES = 'articales',
    ARTICALES_DETAILS = 'articales_details',

    // last
    NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICALES]: '/articales',
    [AppRoutes.ARTICALES_DETAILS]: '/articales/', // + :id

    // последний адрес
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutesPath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICALES]: {
        path: RoutesPath.articales,
        element: <ArticalsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICALES_DETAILS]: {
        path: `${RoutesPath.articales_details}:id`,
        element: <ArticalDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPath.not_found,
        element: <NotFoundPage />,
    },
};
