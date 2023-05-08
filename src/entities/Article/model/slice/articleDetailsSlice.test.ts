import { fetchArtcileById } from '../services/fetchArtcileById/fetchArtcileById';
import { articleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsActions, articleDetailsReducer } from './articleDetailsSlice';

const data = {
    id: '1',
    title: 'title',
};

describe('articleDetailsSlice.test', () => {
    test('test get article data pending', () => {
        const state: DeepPartial<articleDetailsSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(articleDetailsReducer(
            state as articleDetailsSchema,
            fetchArtcileById.pending,
        )).toEqual({
            isLoading: true,
            error: undefined,
        });
    });
});
