import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const [t] = useTranslation('main');
    return (
        <Suspense fallback="Loading">
            <div>{t('Главная страница')}</div>
        </Suspense>
    )
}

export default MainPage;