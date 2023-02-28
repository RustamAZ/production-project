import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-button" type="button" onClick={increment}>+</Button>
            <Button data-testid="decrement-button" type="button" onClick={decrement}>-</Button>
        </div>
    );
};

export default Counter;
