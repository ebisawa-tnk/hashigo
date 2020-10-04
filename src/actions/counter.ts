import * as types from '../constants/ActionTypes';

const increment = () => {
    return { type: types.INCREMENT };
};

const decrement = () => {
    return { type: types.DECREMENT };
};

const CounterActions = {
    increment,
    decrement,
};

export default CounterActions;
