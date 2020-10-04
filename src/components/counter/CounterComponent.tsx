import React from 'react'
import PropTypes from 'prop-types';

const CounterComponent = (props: { counter: any; counterActions: any; }) => {
    const { counter, counterActions } = props;

    return (
        <div>
            <h2>count={counter.value}</h2>
            <button onClick={() => counterActions.increment()}>増加</button>
            <button onClick={() => counterActions.decrement()}>減少</button>
        </div>
    );
};

CounterComponent.propTypes = {
    counter: PropTypes.object.isRequired,
    counterActions: PropTypes.object.isRequired,
};

export default CounterComponent;
