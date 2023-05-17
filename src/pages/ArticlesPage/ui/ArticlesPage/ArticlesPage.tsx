import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('ARTICLES PAGE')}
        </div>
    );
};

export default memo(ArticlesPage);
