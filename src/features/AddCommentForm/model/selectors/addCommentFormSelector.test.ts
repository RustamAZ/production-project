import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelector';

describe('getAddCommentFormText.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            AddCommentForm: {
                text: 'comment',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('comment');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
    });
});

describe('getAddCommentFormError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            AddCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
