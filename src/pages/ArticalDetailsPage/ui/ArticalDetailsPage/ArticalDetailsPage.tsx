import { ArticleDetails } from 'entities/Article';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticalDetailsPage = () => {
    const { t } = useTranslation('articleDetails');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticalDetailsPage);
