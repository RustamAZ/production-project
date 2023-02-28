import { Counter } from 'entities/Counter';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const [t] = useTranslation('main');
    return (
        <Suspense fallback="">
            <div>{t('Главная страница')}</div>
            <Counter />
        </Suspense>
    );
};

export default MainPage;
