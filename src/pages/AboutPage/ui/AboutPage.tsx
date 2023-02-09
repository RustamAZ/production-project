import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const [t] = useTranslation('about');
    return (
        <Suspense fallback="Loading">
            <div>{t('О нас')}</div>
        </Suspense>
    )
}

export default AboutPage;