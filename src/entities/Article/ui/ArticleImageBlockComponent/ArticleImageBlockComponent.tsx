import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { ArtcileImageBlock } from 'entities/Article/model/types/acticle';
import { Text, TextAlign } from 'shared/ui/Text/Text';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArtcileImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className = '',
        block,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={ClassNames(cls.article, {}, [className])}>
            <img src={block.src} alt={t(block.title)} />
            {block.title && <Text text={t(block.title)} align={TextAlign.CENTER} />}
        </div>
    );
});
