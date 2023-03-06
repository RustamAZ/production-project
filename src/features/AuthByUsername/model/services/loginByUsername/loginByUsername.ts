import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entities/User/model/slice/userSlice';
import { USER_LOCALSTORAGE_KEY } from '../../../../../shared/const/localstorage';

interface LoginByUsernameProps {
    username: string,
    password: string
}

interface User {
    username: string,
    password: string
}

enum Errors {
    INCORRECT_DATA = '',
    SERVER_ERROR = ''
}

const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);
            if (!response.data) {
                throw new Error('');
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);

export default loginByUsername;
