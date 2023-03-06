import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState';
import loginByUsername from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);
    const dispatch = useDispatch();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginHandler = useCallback(() => {
        dispatch(loginByUsername({ password, username }));
    }, [dispatch, username, password]);

    return (
        <div className={ClassNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                label={t('Введите логин')}
                autofocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                onChange={onChangePassword}
                className={cls.input}
                label={t('Введите пароль')}
                value={password}
            />
            <Button
                onClick={onLoginHandler}
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
