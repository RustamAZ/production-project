import React, { Suspense } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <div className={ClassNames('', {}, [className])}>
            <Modal lazy isOpen={isOpen} onClose={onClose}>
                <Suspense fallback={<Loader />}>
                    <LoginFormAsync />
                </Suspense>
            </Modal>
        </div>
    );
};

export default LoginModal;
