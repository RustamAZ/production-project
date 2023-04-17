import React, { ChangeEvent, memo, useMemo } from 'react';
import { ClassNames, Mods } from 'shared/lib/ClassNames/ClassNames';

import cls from './Select.module.scss';

export interface SelectOption {
    value: string,
    content: string,
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[]
    value?: string,
    readonly?: boolean,
    onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
    const {
        className = '',
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            key={opt.value}
            value={opt.value}
        >
            {opt.content}

        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={ClassNames(cls.Wrapper, mods, [className])}>
            {
                label && <span className={cls.label}>{`${label}>`}</span>
            }
            <select disabled={readonly} value={value} onChange={onChangeHandler} name="" id="" className={cls.select}>
                {optionList}
            </select>
        </div>
    );
});
