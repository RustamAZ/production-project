import React, {
    Dispatch, ReactNode, SetStateAction, useRef,
} from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean,
    onClose?: () => void,
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <Portal>
            <div className={ClassNames(cls.Modal, mods, [className])}>
                <div onClick={closeHandler} className={cls.overlay}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
