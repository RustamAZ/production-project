import React, { ButtonHTMLAttributes, FC } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: string;
    theme?: ThemeButton;
    type?: 'submit' | 'reset' | 'button';
}

export const Button :FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;
    return (
        <button
            type="button"
            className={ClassNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
