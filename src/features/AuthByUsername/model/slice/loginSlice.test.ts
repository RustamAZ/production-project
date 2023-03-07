import { loginReducer, loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { DeepPartial } from 'redux';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123123'),
        )).toStrictEqual({ username: '123123' });
    });

    test('should set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123'),
        )).toStrictEqual({ password: '123123' });
    });
});
