import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'app/providers/ThemeProvider';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={ClassNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
