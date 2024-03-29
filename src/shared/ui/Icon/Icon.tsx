import React from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = (props: IconProps) => {
    const {
        className = '',
        Svg,
    } = props;
    const { t } = useTranslation();

    return (
        <Svg className={ClassNames(cls.Icon, {}, [className])} />
    );
};
