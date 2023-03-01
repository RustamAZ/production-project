import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const [t] = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <Suspense fallback="">
            <div>{t('Главная страница')}</div>
            <Input value={value} onChange={onChange} label={t('Введите текст')} />
        </Suspense>
    );
};

export default MainPage;
