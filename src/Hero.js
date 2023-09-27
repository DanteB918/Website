import React from 'react';
import Typed from 'typed.js';
import {Provider, useDispatch, useSelector} from "react-redux";
import {
    changeColor
} from './Wave';
import { useLocation } from 'react-router-dom';


function Hero() {
    const el = React.useRef(null);
    const { wave } = useSelector((state) => state.waveReducer);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        var typed = new Typed(el.current, { // typing animation
            strings: ["Developer"],//, "Software Engineer", "Designer", "Freelancer",
            typeSpeed: 150,
            backSpeed: 60,
            startDelay: 400
            //loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };

      }, []);



  return (
    <>
        <div style={{height: '100vh', width: '100%', textAlign: 'center'}} className="fluid-container">
            <div style={{transform: 'translateY(50vh)'}} className="row">
                <div className="col-12" style={{textAlign: 'center'}} >
                    <h1 id="ima" className="white">I'm Dante Bradshaw, <br/>And I'm a <span style={{color: 'crimson'}} ref={el}></span></h1>
                    <p id="together" className="white">Let's work together.</p>
                        <a href="mailto:plansuperior@gmail.com">    <button className="btn"><span className="greet">Contact Me</span><i className="fa-solid fa-envelope"></i></button>
                    </a>
                </div>
            </div>
        </div>
        {/* <!--Moving Waves bottom of Hero Section--> */}
        <svg className="waves" id="theWave" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
                <use href="#gentle-wave" x="48" y="0" fill={wave + "0.7)"} />
                <use href="#gentle-wave" x="48" y="3" fill={wave + "0.5)"} />
                <use href="#gentle-wave" x="48" y="5" fill={wave + "0.3)"} />
                <use href="#gentle-wave" x="48" y="7" fill={wave + "1)"} />
            </g>
        </svg>
    </>
  );
}

export default Hero;
