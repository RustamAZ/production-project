import { Article } from './acticle';

export interface articleDetailsSchema {
    isLoading: boolean,
    error?: string,
    data?: Article
}
