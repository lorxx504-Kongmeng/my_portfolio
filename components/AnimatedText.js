import React, {useState, useEffect} from 'react'
import {CSSTransition} from 'react-transition-group'

const AnimatedText = () => {
    const [isSoftwareEngineer, setIsSoftwareEngineer] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsSoftwareEngineer((prev) => !prev);
        }, 3000)

        return () => clearInterval(interval);
    },)






    return (
        <div>
            <CSSTransition
                in={isSoftwareEngineer}
                timeout={500}
                classNames="text-animation"
                unmountOnExit
            >
                <h1>Software Engineer</h1>
            </CSSTransition>
            <CSSTransition
                in={!isSoftwareEngineer}
                timeout={500}
                classNames="text-animation"
                unmountOnExit
            >
                <h1>Full Stack Engineer</h1>
            </CSSTransition>
    </div>
    )
}

export default AnimatedText