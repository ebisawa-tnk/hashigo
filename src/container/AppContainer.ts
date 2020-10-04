import React, { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/header/HeaderComponent';
import Counter from '../components/counter/CounterComponent';

import { increment, decrement } from '../slices/counter';

type Props = {
    children: React.ReactNode
}
const useActions = (actions: any, deps:  any[]):any => {
    const dispatch = useDispatch();
    return useMemo(
        () => {
            if (Array.isArray(actions)) {
                return actions.map(a => bindActionCreators(a, dispatch))
            }
            return bindActionCreators(actions, dispatch)
        },
        deps ? [dispatch, ...deps] : [dispatch]
    )
};

const AppContainer: (props: any) => boolean = props =>{
    // const counterActions = useActions(CounterActions);
    const counterActions = useActions({ increment, decrement },[]);
    const counter = useSelector(state => state.counter);

    const _counterProps = { counter, counterActions, ...props };
    return (
        <div>
            <Header />
        <Counter {..._counterProps} />
    </div>
);
};

export default AppContainer;
