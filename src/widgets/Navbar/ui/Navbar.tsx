import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [t] = useTranslation();
    const dispatch = useDispatch();
    const userAuthData = useSelector(getUserAuthData);

    const closeHandler = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onLogin = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (userAuthData) {
        return (
            <div className={ClassNames(cls.Navbar, {}, [className])}>
                <Button theme={ThemeButton.CLEAR_INVERTED} onClick={onLogout} type="button">{t('Выйти')}</Button>
            </div>
        );
    }

    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onLogin}
                type="button"
            >
                {t('Войти')}

            </Button>
            {isOpen && <LoginModal isOpen={isOpen} onClose={closeHandler} />}
        </div>
    );
});
