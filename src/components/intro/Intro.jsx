import './intro.scss'
import {init} from "ityped";
import { useEffect, useRef } from "react";
//import image from './assets/germain-2.png'


export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, 
            { showCursor: true,
                backDelay: 1500,
             strings: ['App Development', 'Web Development' ] })
        
    }, [])
    
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">  
                    <div className="image">
                        <img src="/germain-2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there, the name is</h2>
                    <h1>Germain</h1>
                    <h3>
                        I do <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="/downArrow.png" alt="" />
                </a>
            </div>
        </div>
    )
}
