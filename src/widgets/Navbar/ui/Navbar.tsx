import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [t] = useTranslation();
    const modalToggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} onClick={modalToggle} type="button">{t('Войти')}</Button>
            <Modal isOpen={isOpen} onClose={modalToggle}>
                {t('Текст модального окна')}
            </Modal>
        </div>
    );
};
