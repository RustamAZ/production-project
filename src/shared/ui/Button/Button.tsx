import React, { ButtonHTMLAttributes, FC } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string;
    theme?: ThemeButton;
    square?: boolean,
    size?: SizeButton,
    type?: 'submit' | 'reset' | 'button';
}

export const Button :FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={ClassNames(cls.Button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
