import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticalsPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('ARTICALES PAGE')}
        </div>
    );
};

export default memo(ArticalsPage);
