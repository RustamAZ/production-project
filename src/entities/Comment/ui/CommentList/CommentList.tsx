import React, { memo } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Comment } from 'entities/Comment/model/types/comment';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className = '',
        comments,
        isLoading,
    } = props;

    const [t] = useTranslation();

    if (isLoading) {
        return (
            <div className={ClassNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={ClassNames(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard key={comment.id} isLoading={isLoading} comment={comment} />
                    ))
                    : <Text title={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
