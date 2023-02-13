import { Suspense, useEffect } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Navbar } from 'widgets/Navbar';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { AppRouter } from './providers/router';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
