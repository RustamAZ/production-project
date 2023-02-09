import { Suspense } from 'react';
import React, { useState } from 'react';
import { ClassNames } from "shared/lib/ClassNames/ClassNames";
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import ThemeSwitcher from 'widgets/ThemeSwitcher';

import cls from "./Sidebar.module.scss";


interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const {className} = props;
    const [collapsed, setCollpsed] = useState(false)

    const onToggle = () => {
        setCollpsed(prev => !prev)
    }

    return (
        <div 
            className={ClassNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>

            <div className={ClassNames(cls.switchers, {}, [])}>
                <ThemeSwitcher/>
                <Suspense fallback="Loading">
                    <LangSwitcher className={cls.lang}/>
                </Suspense>
            </div>
        </div>
    )
}