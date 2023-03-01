import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={ClassNames(cls.LoginForm, {}, [className])}>
            <Input
                className={cls.input}
                label={t('Введите логин')}
                autofocus
            />
            <Input className={cls.input} label={t('Введите пароль')} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
