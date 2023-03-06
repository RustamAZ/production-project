import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

export default createReduxStore;
