import { LoginModal } from 'features/AuthByUsername';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [t] = useTranslation();

    const closeHandler = useCallback(() => {
        setIsOpen(false);
    }, []);

    const openHandler = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} onClick={openHandler} type="button">{t('Войти')}</Button>
            <LoginModal isOpen={isOpen} onClose={closeHandler} />
        </div>
    );
};
