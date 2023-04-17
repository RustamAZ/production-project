import React, { CSSProperties, useMemo } from 'react';
import { ClassNames, Mods } from 'shared/lib/ClassNames/ClassNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className = '',
        src,
        size,
        alt,
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: `${size}px`,
        height: `${size}px`,
    }), []);

    const mods: Mods = {};

    return (
        <img
            style={style}
            src={src}
            alt={alt}
            className={ClassNames(cls.Avatar, mods, [className])}
        />
    );
};
