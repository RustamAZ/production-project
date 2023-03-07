import { StoreProvider } from './ui/StoreProvider';
import createReduxStore from './config/store';
import type { StateSchema } from './config/StateSchema';
import { ReduxStoreWithManager } from './config/StateSchema';
import type { AppDispatch } from './config/store';

export {
    StateSchema,
    createReduxStore,
    StoreProvider,
    ReduxStoreWithManager,
    AppDispatch,
};
