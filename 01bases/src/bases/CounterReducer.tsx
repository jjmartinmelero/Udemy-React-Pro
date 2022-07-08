import React, { useState } from 'react';

export const CounterReducerComponent = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(counter + 1);

    return (
        <>
            <div>Counter Reducer {counter}</div>
            <button onClick={handleClick}>+1</button>
        </>
    )
}
