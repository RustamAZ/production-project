import { LoginSchema } from 'features/AuthByUsername';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { articleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from '../../../../features/AddCommentForm/model/types/addCommentForm';
import { ProfileSchema } from '../../../../entities/Profile/model/types/profile';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // Асинхронные редюссеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: articleDetailsSchema
    ArticleDetailsComments?: ArticleDetailsCommentsSchema
    AddCommentForm?: AddCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema
}
