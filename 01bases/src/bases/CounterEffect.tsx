import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMO_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    const handleClick = () => {
        if( counter + 1 <= MAXIMO_COUNT ){
            setCounter(counter + 1)
        }
    };

    const counterElement = useRef<HTMLHeadingElement>(null);

    useEffect(() => {

        if( counter < 10 ) return;

        const tl = gsap.timeline();

        tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'});
        tl.to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'});

        console.log('%cProbando los estilos', 'color: red; background-color: black;');
        

    }, [counter])
    

    return (
        <>
            <h1>Counter Effect</h1>
            <h2 ref={counterElement}>{counter}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    )
}
