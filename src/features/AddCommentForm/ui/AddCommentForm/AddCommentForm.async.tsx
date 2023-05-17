import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // Для пэт проекта, асинхранная подгрузка компонента
    setTimeout(() => { resolve(import('./AddCommentForm')); }, 1500);
}));
