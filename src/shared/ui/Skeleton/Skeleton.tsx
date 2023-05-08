import React, { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width?: string;
    height?: string;
    border?: string ;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className = '',
        width,
        height,
        border,
    } = props;
    const { t } = useTranslation();

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div style={styles} className={ClassNames(cls.Skeleton, {}, [className])} />
    );
};
