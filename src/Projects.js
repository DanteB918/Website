import Slider from "react-slick";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from './Wave';

function Projects() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(changeColor('rgba(32, 32, 32,'));
    })
    //Slider
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 5000,
        speed: 500,
        adaptiveHeight: true
    }
  return (
    <div style={{backgroundColor: 'rgba(32,32,32)'}}>
    
        
        <div className="container" id="project" style={{paddingBottom: '5%'}}>
            <div className="row">
                <div id="proj">
                    <p className="h1" style={{textAlign: 'center'}}>
                    Projects
                    </p>
                </div>
            </div>    
        </div>
        <div style={{textAlign: 'center', paddingBottom: '6%'}} className="fluid-container">
            <Slider {...settings} className="row white"  style={{paddingBottom: '2%', display: 'flex', justifyContent: 'center'}}>
                <div>
                    <div className="col-lg-6" style={{padding: '3%', textAlign: 'left', float: 'left'}}>
                        <p className="h1">MTG Gatherhub</p>
                        <p className="white">
                            Laravel 10 application featuring an authentification/user system, you can create a game and invite your friends to play
                            Magic: The Gathering, a tabletop card game! Sign up today and try it out!
                            <ul>
                                <li>Livewire</li>
                                <li>SCSS</li>
                                <li>PHP Unit Testing</li>
                            </ul>
                            <div className="row-tools">
                                <img src="images/laravel.png" alt="Laravel" className="img-fluid" />
                                <img src="images/livewire.png" alt="Livewire" className="img-fluid" />
                                <img src="images/php.png" alt="PHP" className="img-fluid" />
                                <img src="images/scss.webp" alt="SCSS" className="img-fluid" />
                                <img src="images/mysql.png" alt="MySQL"/>
                            </div>
                            <br />
                            <a href="https://github.com/DanteB918/find-mtg-games" target="_blank">Source Code <i className="fas fa-laptop-code"></i></a>
                        </p>    
                    </div>
                    <div className="col-lg-6 float-lg-start" >
                        <a href="https://github.com/DanteB918/find-mtg-games" target="_blank">
                            <img src="images/mtg-gatherhub.png" alt="MTG Gatherhub" className="work"/>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="col-lg-6" style={{padding: '3%', textAlign: 'left', float: 'left'}}>
                        <p className="h1">PokeDex</p>
                        <p className="white">
                            Chrome extension for looking up pokemon from the browser, using the <a href="https://pokeapi.co/" target="_blank">Pokemon API</a>,
                            we can take the user's input of the pokemon name and look it up using HTTP requests. I also made this same application for mobile, using React Native!
                            <div className="row-tools">
                                <img src="images/htmllogo.webp" alt="HTML" className="img-fluid" />
                                <img src="images/csslogo.webp" alt="CSS" className="img-fluid" />
                                <img src="images/js.png" alt="Javascript" className="img-fluid" />
                                <img src="images/react.png" alt="React Native" className="img-fluid" />
                                <img src="images/pokemon-api.png" alt="Pokemon API" className="img-fluid" />
                            </div>
                            <br />
                            <a href="https://github.com/DanteB918/PokeDextension" target="_blank">Source Code Extension <i className="fas fa-laptop-code"></i></a><br /><br />
                            <a href="https://github.com/DanteB918/pokedex-react-native" target="_blank">Source Code Mobile <i className="fas fa-laptop-code"></i></a><br /><br />
                            <a href="https://chrome.google.com/webstore/detail/pok%C3%A9dextension/abodchomfjonjkangmkadfacjlmjkgof" target="_blank">Chrome Store <i className="fa-brands fa-chrome"></i></a><br /><br />
                            <a href="https://www.youtube.com/shorts/ZZMef6CuyQ4" target="_blank">Mobile Demo <i className="fa-brands fa-youtube"></i></a>
                        </p>    
                    </div>
                    <div className="col-lg-6 float-lg-start" >
                        <a href="https://github.com/DanteB918/PokeDextension" target="_blank">
                            <img src="images/pokedex-img.png" alt="Pokedex Project" style={{maxWidth: '600px'}}  className="work"/>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="col-lg-6" style={{padding: '3%', textAlign: 'left', float: 'left'}}>
                        <p className="h1">Phaser Game</p>
                        <p className="white">
                            Using free sprites and assets from various sources, as well as the Phaser gaming engine (v3), I created a browser game that is free to use!
                            <div className="row-tools">
                                <img src="images/js.png" alt="Javascript" className="img-fluid" />
                                <a href="https://phaser.io/" target="_blank"><img src="images/phaser.png" alt="Phaser3" className="img-fluid" /></a>
                            </div>
                            <br />
                            <a href="https://github.com/DanteB918/wizard-game" target="_blank">Source Code <i className="fas fa-laptop-code"></i></a>
                            <br /><br /><a href="https://danteb918.github.io/wizard-game/" target="_blank">Play Here <i className="fa-solid fa-gamepad"></i></a>
                        </p>
                    </div>
                    <div className="col-lg-6 float-lg-start" >
                        <a href="https://danteb918.github.io/wizard-game/" target="_blank">
                            <img src="images/phaser-game.png" alt="Phaser3 Game image"  className="work"/>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="col-lg-6" style={{padding: '3%', textAlign: 'left', float: 'left'}}>
                        <p className="h1">Flask Desktop Application</p>
                        <p className="white">
                            This was more of a joke at the time but I decided to really build it. It's a desktop application that you would use to record sneezes! This was my first time building a desktop application.
                            If you'd like to download it and give it a shot, you can do so by clicking the button below (only currently for Windows!).
                            <ul>
                                <li>AJAX</li>
                                <li>SQLAlchemy</li>
                                <li>SocketIO</li>
                                <li>FlaskWebGui</li>
                            </ul>
                            <div className="row-tools">
                                <img src="images/flask.png" alt="Flask" className="img-fluid" />
                                <img src="images/pythonlogo.png" alt="Python" className="img-fluid" />
                                <img src="images/flaskwebgui.png" alt="FlaskWebGui" className="img-fluid" />
                                <img src="images/socketio.png" alt="SocketIO" className="img-fluid" />
                                <img src="images/sqlalchemy.png" alt="SQLAlchemy" className="img-fluid" />
                                <img src="images/jquery.png" alt="FlaskWebGui" className="img-fluid" />
                            </div>
                            <br />
                            <a href="https://github.com/DanteB918/sneeze.io" target="_blank">Source Code <i className="fas fa-laptop-code"></i></a>
                            <br /><br /><a href="Sneeze.io.exe">Download for Windows <i className="fa-brands fa-windows"></i></a>
                        </p>    
                    </div>
                    <div className="col-lg-6 float-lg-start" >
                        <a href="https://github.com/DanteB918/sneeze.io" target="_blank">
                            <img src="images/sneezeio-pic.png" alt="Sneeze.io Desktop App"  className="work"/>
                        </a>
                    </div>
                </div>
                <div>
                    <div style={{padding: '3%', textAlign: 'left', float: 'left'}}>
                        <p className="h1">This website!</p>
                        <p className="white">
                            I built this website when I first learned html/css, and have redesigned it a ton of times. Currently, using React &amp; Redux and being hosted on GitHub Pages.
                            <ul>
                                <li>React.js</li>
                                <li>Redux</li>
                            </ul>
                            <div className="row-tools">
                                <img src="images/react.png" alt="React.js" className="img-fluid" />
                                <img src="images/redux.png" alt="Redux" className="img-fluid" />
                                <img src="images/htmllogo.png" alt="HTML" className="img-fluid" />
                                <img src="images/csslogo.png" alt="CSS" className="img-fluid" />
                            </div>
                            <br />
                            <a href="https://github.com/DanteB918/Website" target="_blank">Source Code <i className="fas fa-laptop-code"></i></a>
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  );
}

export default Projects;
