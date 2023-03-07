import { memo, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = memo(() => {
    const [t] = useTranslation('about');
    return (
        <Suspense fallback="">
            <div>{t('О нас')}</div>
        </Suspense>
    );
});

export default AboutPage;
