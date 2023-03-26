import React, { memo } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = memo((props: LoaderProps) => {
    const { className = '' } = props;

    return (
        <div className={ClassNames(cls.ldsEllipsis, {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
});
