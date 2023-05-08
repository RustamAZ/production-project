import { userReducer, userActions } from './model/slice/userSlice';
import type { UserSchema, User } from './model/types/userSchema';
import { getUserAuthData } from './model/selector/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selector/getUserInited/getUserInited';

export {
    userReducer,
    UserSchema,
    User,
    userActions,
    getUserAuthData,
    getUserInited,
};
