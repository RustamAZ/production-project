import { Counter } from 'entities/Counter';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const [t] = useTranslation('about');
    return (
        <Suspense fallback="">
            <div>{t('О нас')}</div>
            <Counter />
        </Suspense>
    );
};

export default AboutPage;
