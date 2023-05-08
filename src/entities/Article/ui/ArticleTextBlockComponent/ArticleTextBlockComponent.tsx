import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArtcileTextBlock } from '../../model/types/acticle';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArtcileTextBlock,
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const {
        className = '',
        block,
    } = props;
    const { t } = useTranslation();
    const { paragraphs, title } = block;

    return (
        <div className={ClassNames(cls.ArticleTextBlockComponent, {}, [className])}>
            { title && <Text text={title} className={cls.title} size={TextSize.L} /> }
            { paragraphs.map((par) => <Text key={par} text={par} className={cls.paragraph} />) }
        </div>
    );
});
