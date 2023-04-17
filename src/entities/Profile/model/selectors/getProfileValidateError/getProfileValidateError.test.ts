import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateError } from './getProfileValidateError';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateError.test', () => {
    test('should return validate errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [ValidateProfileError.INCORRET_AGE],
            },
        };
        expect(getProfileValidateError(state as StateSchema)).toEqual(['INCORRET_AGE']);
    });
});
