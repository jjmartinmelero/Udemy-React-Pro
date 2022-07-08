import React, { useState } from 'react';

interface Props {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({initialValue = 10}: Props) => {

    const [counter, setCounter] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });

    const handleClick = (increment: number) => setCounter(({clicks, counter}) =>({
                                                                counter: counter + increment,
                                                                clicks: clicks + 1
                                                            }));

    return (
        <>
            <h1>CounterBy {counter.counter}</h1>
            <h1>clicks {counter.clicks}</h1>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}
