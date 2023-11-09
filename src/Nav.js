import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeColor } from './Wave';

function Nav() {
    const [showMob, setShowMob] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    const changePage = () =>{
        window.scrollTo(0, 0);
        document.querySelector('.mob-menu').style.zIndex = 'initial';
        document.querySelector('.hamburger').style.zIndex = 'initial';
        document.querySelector('#hamburger').classList.remove('is-active');
        document.querySelector('.icon-li').style.display = 'none';
        document.querySelector('.mob-menu').style.display = 'none';
        const lines = document.querySelectorAll('.hamburger .line');
        lines.forEach(item => item.style.backgroundColor = '#ecf0f1');
    }

    const clickNav = () => {
        isActive ? setIsActive(false) : setIsActive(true); //toggle active state
            if (isActive){
                document.querySelector('#hamburger').classList.add('is-active');
                document.querySelector('.mob-menu').style.zIndex = '9998';
                document.querySelector('.hamburger').style.zIndex = '9999';
                document.querySelector('.icon-li').style.display = 'block';
                document.querySelector('.mob-menu').style.display = 'flex';
                const lines = document.querySelectorAll('.hamburger .line');
                lines.forEach(item => item.style.backgroundColor = 'black');
            }else{
                document.querySelector('.mob-menu').style.zIndex = 'initial';
                document.querySelector('.hamburger').style.zIndex = 'initial';

                document.querySelector('#hamburger').classList.remove('is-active');
                document.querySelector('.icon-li').style.display = 'none';
                document.querySelector('.mob-menu').style.display = 'none';
                const lines = document.querySelectorAll('.hamburger .line');
                lines.forEach(item => item.style.backgroundColor = '#ecf0f1');
            }
        }


  return (
    <nav id= "bar">
        <ul>
            <Link to="/"><div id="mylogo">D</div></Link>
            <div className="desk-only">
                <Link to="/">
                    <li className="icon-li">
                        <i className="fas fa-home"></i> <span className="icon-name">Home</span>
                    </li>
                </Link>
                <Link to="contact" >
                    <li className="icon-li">
                        <i className="fas fa-id-card"></i> <span className="icon-name">Contact</span>
                    </li>
                </Link>
                <Link to="projects">
                    <li className="icon-li">
                        <i className="fas fa-laptop-code"></i> <span className="icon-name">Projects</span>
                    </li>
                </Link>
                <Link to="donation">
                    <li className="icon-li">
                        <i className="fa-solid fa-hand-holding-dollar"></i><span className="icon-name"> Donations</span>
                    </li>
                </Link>
            </div>
            
            <div className="mob-only">
                <div className="hamburger" id="hamburger" onClick={clickNav}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <ul className="mob-menu" style={{display: 'none'}}>
                    <li className="icon-li">
                        <Link to="/" onClick={changePage}><i className="fas fa-home"></i><span className="icon-name">Home</span></Link>
                    </li>
                    <li className="icon-li">
                        <Link to="/contact" onClick={changePage}><i className="fas fa-id-card"></i><span className="icon-name">Contact</span></Link>
                    </li>
                    <li className="icon-li">
                        <Link to="/projects" onClick={changePage}><i className="fas fa-laptop-code"></i><span className="icon-name">Projects</span></Link>
                    </li>
                    <li className="icon-li">
                        <Link to="/donation" onClick={changePage}><i className="fa-solid fa-hand-holding-dollar"></i><span className="icon-name">Donations</span></Link>
                    </li>
                </ul>
            </div>
        </ul>
    </nav>
  );
}

export default Nav;
