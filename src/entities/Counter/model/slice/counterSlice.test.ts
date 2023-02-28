import { CounterSchema } from 'entities/Counter/model/types/CounterSchema';
import { counterReducer } from 'entities/Counter';
import { counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 1,
        };
        expect(
            counterReducer(state, counterActions.decrement()),
        )
            .toEqual({ value: 0 });
    });

    test('increment', () => {
        const state: CounterSchema = {
            value: 2,
        };
        expect(
            counterReducer(state, counterActions.increment()),
        )
            .toEqual({ value: 3 });
    });

    test('should work with empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment()),
        )
            .toEqual({ value: 1 });
    });
});
