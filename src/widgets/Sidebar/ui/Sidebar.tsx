import React, { Suspense, useState } from 'react';

import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollpsed] = useState(false);

    const [t] = useTranslation();

    const onToggle = () => {
        setCollpsed((prev) => !prev);
    };

    return (
        <div
            className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button onClick={onToggle}>{t('toggle')}</Button>

            <div className={ClassNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <Suspense fallback="">
                    <LangSwitcher className={cls.lang} />
                </Suspense>
            </div>
        </div>
    );
};
