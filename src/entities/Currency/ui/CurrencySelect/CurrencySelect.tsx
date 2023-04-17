import { Currency } from 'entities/Currency/model/types/currency';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void,
    readonly?: boolean
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();
    const {
        className = '',
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandelr = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={className}
            value={value}
            onChange={onChangeHandelr}
            label={t('Укажите валюту')}
            options={options}
            readonly={readonly}
        />
    );
});
