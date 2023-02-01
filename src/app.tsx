import { Routes, Route, Link } from 'react-router-dom';
import { Suspense } from "react";

import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { useTheme } from './theme/useTheme';

import './styles/index.scss';
import { ClassNames } from './helpers/ClassNames/ClassNames';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>  
            </Suspense>
        </div>
    )
}

export default App;