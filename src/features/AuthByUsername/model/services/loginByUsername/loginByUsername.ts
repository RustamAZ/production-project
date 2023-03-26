import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { userActions } from 'entities/User/model/slice/userSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

interface LoginByUsernameProps {
    username: string,
    password: string
}

const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate?.('/about');
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);

export {
    loginByUsername,
};
