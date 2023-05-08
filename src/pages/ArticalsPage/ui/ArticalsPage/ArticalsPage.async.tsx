import { lazy } from 'react';

export const ArticalesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => { resolve(import('./ArticalsPage')); }, 1500);
}));
