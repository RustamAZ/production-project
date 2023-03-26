import { memo, useState } from 'react';

import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';

import { SidebarItemsList } from '../../module/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className = '' } = props;
    const [collapsed, setCollpsed] = useState(false);

    const onToggle = () => {
        setCollpsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <ul className={cls.list}>
                {SidebarItemsList.map((item) => (
                    <li key={item.path}><SidebarItem item={item} collapsed={collapsed} /></li>
                ))}
            </ul>

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={SizeButton.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={ClassNames(cls.switchers, {}, [])}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={cls.lang} />
            </div>
        </div>
    );
});
