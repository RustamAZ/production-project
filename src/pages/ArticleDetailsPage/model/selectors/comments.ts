import { StateSchema } from '../../../../app/providers/StoreProvider/config/StateSchema';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.ArticleDetailsComments?.isLoading || false;
export const getArticleCommentsError = (state: StateSchema) => state.ArticleDetailsComments?.error || undefined;
