import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormAction, addCommentFormReducer } from './addCommentFormSlice';

describe('articleDetailsSlice.test', () => {
    test('test set comment', () => {
        const state: DeepPartial<AddCommentFormSchema> = {};
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormAction.setText('comment'),
        )).toEqual({
            error: undefined,
            text: 'comment',
        });
    });
});
