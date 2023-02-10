import React, { Suspense, useState } from 'react';

import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import { Button } from 'shared/ui/Button/Button';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollpsed] = useState(false);

    const onToggle = () => {
        setCollpsed((prev) => !prev);
    };

    return (
        <div
            className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button onClick={onToggle}>toggle</Button>

            <div className={ClassNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <Suspense fallback="Loading">
                    <LangSwitcher className={cls.lang} />
                </Suspense>
            </div>
        </div>
    );
};
