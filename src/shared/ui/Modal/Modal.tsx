import { useTheme } from 'app/providers/ThemeProvider';
import React, {
    ReactNode, useEffect, useState,
} from 'react';
import { ClassNames, Mods } from 'shared/lib/ClassNames/ClassNames';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {
        className = '', children, isOpen, onClose, lazy,
    } = props;

    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    const mods: Mods = {
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

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={ClassNames(cls.Modal, mods, [className, theme])}>
                <div onClick={closeHandler} className={cls.overlay} />
                <div className={cls.content} onClick={onContentClick}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
