import React, { useState } from 'react';

interface Props {
    initialValue?: number
}

export const Counter = ({initialValue = 0}: Props) => {

    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => setCounter(counter + 1);

    return (
        <>
            <div>Counter {counter}</div>
            <button onClick={handleClick}>+1</button>
        </>
    )
}
