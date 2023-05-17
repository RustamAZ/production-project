import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
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
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',

    // last
    NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/', // + :id

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
        path: `${RoutesPath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutesPath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${RoutesPath.articles_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPath.not_found,
        element: <NotFoundPage />,
    },
};
