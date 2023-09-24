import './App.css';
import { useDispatch } from 'react-redux';
import { changeColor } from './Wave';
import { useEffect } from 'react';
function About() {
    const dispatch = useDispatch();
    useEffect(() => {
        document.querySelector('.loader').classList.add('fade-out-loader');
        dispatch(changeColor('rgba(239,239,240,'));
    });
  return (
        <div style={{backgroundColor: 'rgba(239,239,240, 1)', paddingBottom: '2%', textAlign: 'center'}} class="fluid-container">
        <div class="row" style={{marginBottom: '3%'}}>
            <h2 class="h1" style={{color:'black', fontFamily: 'Space Mono, monospace', textAlign: 'center', paddingTop: 20}}>About Me</h2>
            <div class="col-lg-6">
                {/* <!-- main Atropos container (required), add your custom class here --> */}
                <div class="atropos my-atropos">
                    {/* <!-- scale container (required) --> */}
                    <div class="atropos-scale ">
                        {/* <!-- rotate container (required) --> */}
                        <div id="Me" class="atropos-rotate">
                            {/* <!-- inner container (required) --> */}
                            <div class=" atropos-inner">
                                <img id="picofme" data-atropos-offset="5" src="images/picofmenew.webp" height = "450px" alt="Dante Bradshaw" width = "400px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="words" class="col-lg-6">
                <div class="row" style={{display: 'flex', justifyContent: 'center'}}>
                    <div class="col-2">
                        <a href="https://www.linkedin.com/in/dante-bradshaw-6a05061a5/" target="_blank" class="socials linkedin"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div class="col-2">
                        <a href="https://www.instagram.com/dantebradshaw_/" target="_blank" class="socials ig"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <div class="col-2">
                        <a href="https://www.facebook.com/dante.bradshaw.39" target="_blank" class="socials fb"><i class="fa-brands fa-facebook"></i></a>
                    </div>
                    <div class="col-2">
                        <a href="https://github.com/danteb918" target="_blank" class="socials github"><i class="fa-brands fa-github"></i></a>
                    </div>
                    <div class="col-2">
                        <a href="https://vk.com/id571437082" target="_blank" class="socials vk"><i class="fa-brands fa-vk"></i></a>
                    </div>
                </div>
                <div class="loader">
                    <div class="loader-inner">
                        <div class="coffee">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div> 
                {/* <h3 style="margin-top: 1%; font-family: 'Space Mono', monospace; color: #4AF626; background-color:black;">~/my-biography/and/info</u></h3><br/> */}
                <p class="bio-text">
                    Hey there, I'm Dante Bradshaw, a passionate software developer with a knack for crafting elegant solutions to complex problems. My journey into the world of code began with a curious mind and a determination to bring ideas to life through technology.
                    <br/><br/>
                    With a strong foundation in Laravel PHP, I've honed my skills in creating robust web applications that not only meet clients' needs but also exceed their expectations. I believe that clean, maintainable code is the cornerstone of any successful project, and I take pride in my ability to architect systems that stand the test of time.
                </p>            
                </div>

        </div>
            <div class="row">
                <p class="bio-text">
                    My experience extends beyond just Laravel; I've dabbled in various other stacks, gaining valuable insights along the way. This exposure has equipped me with a versatile approach to problem-solving and a deep understanding of different technologies, enabling me to choose the right tool for the job.
                    <br/><br/>
                    What truly fuels my passion is the dynamic nature of the tech industry. I'm an ardent advocate for continuous learning, always staying up-to-date with the latest trends, best practices, and emerging technologies. This ensures that I can bring innovative ideas to the table and provide solutions that are not only current but also future-proof.
                    <br/><br/>
                    Collaboration lies at the heart of my work philosophy. I thrive in team environments, where diverse perspectives come together to create something extraordinary. Whether it's brainstorming a new feature, untangling a tricky bug, or optimizing performance, I believe that the best results emerge through open communication and shared knowledge.
                    <br/><br/>
                    I'm excited to connect with fellow developers, entrepreneurs, and tech enthusiasts. Whether you're looking to collaborate on a project, seeking advice, or just want to chat about the latest advancements in the tech world, feel free to reach out.
                </p>
            </div>
            <div class="skills-row">
                <img src = "images/htmllogo.webp" alt="HTML" />
                <img src = "images/csslogo.webp" alt="CSS" />
                <img src = "images/js.png" alt="Javascript" />
                <img src = "images/bootstrap-logo.webp" alt="Bootstrap" />
                <img src = "images/react.png" alt="React Js/Native" />
                <img src = "images/redux.png" alt="Redux" />
                <img src = "images/pythonlogo.png" alt="Python"/>
                <img src = "images/flask.png" alt="Flask"/>
                <img src = "images/linux.png" alt="Linux" />
                <img src = "images/liquid-markup.png" alt="Liquid Templating Language"/>
                <img src = "images/php.png" alt="PHP"/>
                <img src = "images/laravel.png" alt="Laravel"/>
                <img src = "images/livewire.png" alt="Livewire"/>
                <img src = "images/Wordpress.png" alt="Wordpress"/>
                <img src = "images/docker.webp" alt="Docker"/>
                <img src = "images/scss.webp" alt="SCSS"/>
                <img src = "images/less.webp" alt="Less"/>
                <img src = "images/git.webp" alt="Git"/>
                <img src = "images/npm.png" alt="NPM"/>
                <img src = "images/jquery.png" alt="JQuery"/>
                <img src = "images/jekyll.webp" alt="Jekyll Static Site Generator"/>
                <img src = "images/mysql.png" alt="MySQL"/>
                <img src = "images/sqlalchemy.png" alt="SQLAlchemy"/>
                <img src = "images/microsoft-sql-server.png" alt="Microsoft SQL Server"/>
            </div>
    </div>
    );
}

export default About;
