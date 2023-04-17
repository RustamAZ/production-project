import { getProfileReadOnly } from 'entities/Profile';
import React, {
    FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { ClassNames, Mods } from 'shared/lib/ClassNames/ClassNames';
import cls from './Input.module.scss';

export enum ThemeInput {
    CLEAR = 'clear',
    BORDERED = 'bordered',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    classNames?: string;
    theme?: ThemeInput;
    label?: string;
    name?: string;
    type?: 'checkbox' | 'reset' | 'button';
    value?: string | number;
    autofocus?: boolean;
    onChange?: (value: string) => void;
    readOnly?: boolean
}

export const Input:FC<InputProps> = memo((props: InputProps) => {
    const {
        className = '',
        theme = ThemeInput.CLEAR,
        type = 'text',
        label,
        name,
        value,
        onChange,
        autofocus,
        readOnly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setcaretPosition] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const isCarretVisible = isFocused && !readOnly;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.readonly]: readOnly,
    };

    const onCHangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setcaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setcaretPosition(e.target.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autofocus]);

    if (label) {
        return (
            <div className={ClassNames(cls.Input, mods, [className, cls[theme]])}>
                <label className={cls.label} htmlFor={name}>{`${label}>`}</label>
                <div className={cls.caretWrapper}>
                    <input
                        ref={inputRef}
                        type={type}
                        name={name}
                        id={name}
                        value={value}
                        onChange={onCHangeHandler}
                        className={cls.input}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        readOnly={readOnly}
                        {...otherProps}
                    />
                    {isCarretVisible ? <span className={cls.caret} style={{ left: `${caretPosition * 8}px` }} /> : null}
                </div>
            </div>

        );
    }
    return (
        <div className={cls.caretWrapper}>
            <input
                ref={inputRef}
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onCHangeHandler}
                className={cls.input}
                onFocus={onFocus}
                onBlur={onBlur}
                onSelect={onSelect}
                readOnly={readOnly}
                {...otherProps}
            />
            {isCarretVisible ? <span className={cls.caret} style={{ left: `${caretPosition * 8}px` }} /> : null}
        </div>
    );
});
