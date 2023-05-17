import React, { memo } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import { Comment } from 'entities/Comment/model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutesPath } from 'shared/config/routesConfig/routesConfig';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const {
        className = '',
        comment,
        isLoading,
    } = props;
    const [t] = useTranslation();

    if (isLoading) {
        return (
            <div className={ClassNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton border="50%" width="30px" height="30px" />
                    <Skeleton width="50px" height="25px" className={cls.username} />
                </div>
                <Skeleton width="100%" height="40px" />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={ClassNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutesPath.profile}${comment.user.id}`} className={cls.header}>
                <Avatar size={30} src={comment.user.avatar} />
                <Text className={cls.username} title={t(comment.user.username)} />
            </AppLink>
            <Text text={t(comment.text)} />
        </div>
    );
});
