import React from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;

    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            ...
        </div>
    );
};
