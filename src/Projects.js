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
    
        
        <div class="container" id="project" style={{paddingBottom: '5%'}}>
            <div class="row">
                <div id="proj">
                    <p class="h1" style={{textAlign: 'center'}}>
                    Projects
                    </p>
                </div>
            </div>    
        </div>
        <div style={{textAlign: 'center', paddingBottom: '6%'}} class="fluid-container">
            <Slider {...settings} class="row white"  style={{paddingBottom: '2%', display: 'flex', justifyContent: 'center'}}>
                <div>
                    <div class="col-lg-6" style={{padding: '3%', textAlign: 'left', float: 'left'}}>
                        <p class="h1">MTG Gatherhub</p>
                        <p class="white">
                            Laravel 10 application featuring an authentification/user system, you can create a game and invite your friends to play
                            Magic: The Gathering, a tabletop card game! Sign up today and try it out!
                            <ul>
                                <li>Livewire</li>
                                <li>SCSS</li>
                                <li>PHP Unit Testing</li>
                            </ul>
                            <div class="row-tools">
                                <img src="images/laravel.png" alt="Laravel" class="img-fluid" />
                                <img src="images/livewire.png" alt="Livewire" class="img-fluid" />
                                <img src="images/php.png" alt="PHP" class="img-fluid" />
                                <img src="images/scss.webp" alt="SCSS" class="img-fluid" />
                                <img src="images/mysql.png" alt="MySQL"/>
                            </div>
                            <br />
                            <a href="https://github.com/DanteB918/find-mtg-games" target="_blank">Source Code <i class="fas fa-laptop-code"></i></a>
                        </p>    
                    </div>
                    <div class="col-lg-6 float-lg-start" >
                        <a href="https://github.com/DanteB918/find-mtg-games" target="_blank">
                            <img src="images/mtg-gatherhub.png" alt="MTG Gatherhub" class="work"/>
                        </a>
                    </div>
                </div>
                <div>
                    <div class="col-lg-6" style={{padding: '3%', textAlign: 'left', float: 'left'}}>
                        <p class="h1">PokeDex</p>
                        <p class="white">
                            Chrome extension for looking up pokemon from the browser, using the <a href="https://pokeapi.co/" target="_blank">Pokemon API</a>,
                            we can take the user's input of the pokemon name and look it up using HTTP requests. I also made this same application for mobile, using React Native!
                            <div class="row-tools">
                                <img src="images/htmllogo.webp" alt="HTML" class="img-fluid" />
                                <img src="images/csslogo.webp" alt="CSS" class="img-fluid" />
                                <img src="images/js.png" alt="Javascript" class="img-fluid" />
                                <img src="images/react.png" alt="React Native" class="img-fluid" />
                                <img src="images/pokemon-api.png" alt="Pokemon API" class="img-fluid" />
                            </div>
                            <br />
                            <a href="https://github.com/DanteB918/PokeDextension" target="_blank">Source Code Extension <i class="fas fa-laptop-code"></i></a><br /><br />
                            <a href="https://github.com/DanteB918/pokedex-react-native" target="_blank">Source Code Mobile <i class="fas fa-laptop-code"></i></a><br /><br />
                            <a href="https://chrome.google.com/webstore/detail/pok%C3%A9dextension/abodchomfjonjkangmkadfacjlmjkgof" target="_blank">Chrome Store <i class="fa-brands fa-chrome"></i></a><br /><br />
                            <a href="https://www.youtube.com/shorts/ZZMef6CuyQ4" target="_blank">Mobile Demo <i class="fa-brands fa-youtube"></i></a>
                        </p>    
                    </div>
                    <div class="col-lg-6 float-lg-start" >
                        <a href="https://github.com/DanteB918/PokeDextension" target="_blank">
                            <img src="images/pokedex-img.png" alt="Pokedex Project" style={{maxWidth: '600px'}}  class="work"/>
                        </a>
                    </div>
                </div>
                <div>
                    <div class="col-lg-6" style={{padding: '3%', textAlign: 'left', float: 'left'}}>
                        <p class="h1">Phaser Game</p>
                        <p class="white">
                            Using free sprites and assets from various sources, as well as the Phaser gaming engine (v3), I created a browser game that is free to use!
                            <div class="row-tools">
                                <img src="images/js.png" alt="Javascript" class="img-fluid" />
                                <a href="https://phaser.io/" target="_blank"><img src="images/phaser.png" alt="Phaser3" class="img-fluid" /></a>
                            </div>
                            <br />
                            <a href="https://github.com/DanteB918/wizard-game" target="_blank">Source Code <i class="fas fa-laptop-code"></i></a>
                            <br /><br /><a href="https://danteb918.github.io/wizard-game/" target="_blank">Play Here <i class="fa-solid fa-gamepad"></i></a>
                        </p>
                    </div>
                    <div class="col-lg-6 float-lg-start" >
                        <a href="https://danteb918.github.io/wizard-game/" target="_blank">
                            <img src="images/phaser-game.png" alt="Phaser3 Game image"  class="work"/>
                        </a>
                    </div>
                </div>
                <div>
                    <div class="col-lg-6" style={{padding: '3%', textAlign: 'left', float: 'left'}}>
                        <p class="h1">Flask Desktop Application</p>
                        <p class="white">
                            This was more of a joke at the time but I decided to really build it. It's a desktop application that you would use to record sneezes! This was my first time building a desktop application.
                            If you'd like to download it and give it a shot, you can do so by clicking the button below (only currently for Windows!).
                            <ul>
                                <li>AJAX</li>
                                <li>SQLAlchemy</li>
                                <li>SocketIO</li>
                                <li>FlaskWebGui</li>
                            </ul>
                            <div class="row-tools">
                                <img src="images/flask.png" alt="Flask" class="img-fluid" />
                                <img src="images/pythonlogo.png" alt="Python" class="img-fluid" />
                                <img src="images/flaskwebgui.png" alt="FlaskWebGui" class="img-fluid" />
                                <img src="images/socketio.png" alt="SocketIO" class="img-fluid" />
                                <img src="images/sqlalchemy.png" alt="SQLAlchemy" class="img-fluid" />
                                <img src="images/jquery.png" alt="FlaskWebGui" class="img-fluid" />
                            </div>
                            <br />
                            <a href="https://github.com/DanteB918/sneeze.io" target="_blank">Source Code <i class="fas fa-laptop-code"></i></a>
                            <br /><br /><a href="Sneeze.io.exe">Download for Windows <i class="fa-brands fa-windows"></i></a>
                        </p>    
                    </div>
                    <div class="col-lg-6 float-lg-start" >
                        <a href="https://github.com/DanteB918/sneeze.io" target="_blank">
                            <img src="images/sneezeio-pic.png" alt="Sneeze.io Desktop App"  class="work"/>
                        </a>
                    </div>
                </div>
                <div>
                    <div style={{padding: '3%', textAlign: 'left', float: 'left'}}>
                        <p class="h1">This website!</p>
                        <p class="white">
                            I built this website when I first learned html/css, and have redesigned it a ton of times. Currently, using React &amp; Redux and being hosted on GitHub Pages.
                            <ul>
                                <li>React.js</li>
                                <li>Redux</li>
                            </ul>
                            <div class="row-tools">
                                <img src="images/react.png" alt="React.js" class="img-fluid" />
                                <img src="images/redux.png" alt="Redux" class="img-fluid" />
                                <img src="images/htmllogo.png" alt="HTML" class="img-fluid" />
                                <img src="images/csslogo.png" alt="CSS" class="img-fluid" />
                            </div>
                            <br />
                            <a href="https://github.com/DanteB918/Website" target="_blank">Source Code <i class="fas fa-laptop-code"></i></a>
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  );
}

export default Projects;
