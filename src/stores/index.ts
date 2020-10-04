import { combineReducers, configureStore } from '@reduxjs/toolkit';

import counter from '../slices/counter';

const rootReducer = combineReducers({
    counter: counter.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
