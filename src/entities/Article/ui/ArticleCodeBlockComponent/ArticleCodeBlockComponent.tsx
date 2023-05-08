import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import { memo } from 'react';
import { ArtcileCodeBlock } from 'entities/Article/model/types/acticle';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArtcileCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const {
        className = '',
        block,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={ClassNames(cls.article, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});
