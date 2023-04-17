import { Country } from 'entities/Country/model/types/country';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void,
    readonly?: boolean
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();
    const {
        className = '',
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandelr = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={className}
            value={value}
            onChange={onChangeHandelr}
            label={t('Укажите вашу страну')}
            options={options}
            readonly={readonly}
        />
    );
});
