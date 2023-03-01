import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <div className={ClassNames(cls.LoginModal, {}, [className])}>
            <Modal lazy isOpen={isOpen} onClose={onClose}>
                <LoginForm />
            </Modal>
        </div>
    );
};

export default LoginModal;
