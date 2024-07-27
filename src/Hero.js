import React from 'react';
import Typed from 'typed.js';
import {useSelector} from "react-redux";



function Hero() {
    const el = React.useRef(null);
    const { wave } = useSelector((state) => state.waveReducer);
    const { text, typedText, subText } = useSelector((state) => state.heroText);

    React.useEffect(() => {
        document.querySelector('.loader').classList.add('fade-out-loader');

        var typed = new Typed(el.current, { // typing animation
            strings: [typedText],
            typeSpeed: 150,
            backSpeed: 60,
            startDelay: 400
            //loop: true
        });

        return () => {
            typed.destroy();
          };
      });

  return (
    <>
        <div className="loader">
            <div className="loader-inner">
                <div className="coffee">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div style={{height: '100vh'}} className="fluid-container text-center w-100">
            <div style={{transform: 'translateY(50vh)'}} className="row">
                <div className="col-12" style={{textAlign: 'center'}} >
                    <h1 id="ima" className="white">{ text } <span style={{color: 'crimson'}} ref={ el }></span></h1>
                    <p id="together" className="white">{ subText }</p>

                    <a href="mailto:plansuperior@gmail.com">
                        <button className="btn">
                            <span className="greet">Contact Me</span><i className="fa-solid fa-envelope"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>

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
