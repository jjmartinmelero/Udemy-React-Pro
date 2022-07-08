import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

export const useCounter = ({maxCount = 1}) => {

    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);
    const tl = useRef( gsap.timeline() );

    const handleClick = () => {
        if( counter + 1 <= maxCount ){
            setCounter(counter + 1)
        }
    };

    useLayoutEffect(() => {

        tl.current.to(elementToAnimate.current, {y: -10, duration: 0.2, ease: 'ease.out'})
                  .to(elementToAnimate.current, {y: 0, duration: 1, ease: 'bounce.out'})
                  .pause();

    
      return () => {
        
      };
    }, [])

    useEffect(() => {
        tl.current.play(0);
    }, [counter]);

    return {
        counter,
        elementToAnimate,
        handleClick
    }
}