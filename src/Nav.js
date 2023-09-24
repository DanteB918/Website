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
            <div id="mylogo">D</div>
            <div class="desk-only">
            <li class="icon-li">
                    <Link to="/"><i class="fas fa-home"></i><span class="icon-name">Home</span></Link>
                </li>
                <li class="icon-li">
                    <Link to="/contact" ><i class="fas fa-id-card"></i><span class="icon-name">Contact</span></Link>
                </li>
                {/* <li class="icon-li">
                    <a href="#skills"><i class="fas fa-laptop-code"><span class="icon-name">Skills</span></i></a>
                </li> */}
                <li class="icon-li">
                    <Link to="/projects"><i class="fas fa-laptop-code"></i><span class="icon-name">Projects</span></Link>
                </li>
            </div>
            
            <div class="mob-only">
                <div className="hamburger" id="hamburger" onClick={clickNav}>
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <ul class="mob-menu" style={{display: 'none'}}>
                    <li class="icon-li">
                        <Link to="/" onClick={changePage}><i class="fas fa-home"></i><span class="icon-name">Home</span></Link>
                    </li>
                    <li class="icon-li">
                        <Link to="/contact" onClick={changePage}><i class="fas fa-id-card"></i><span class="icon-name">Contact</span></Link>
                    </li>
                    <li class="icon-li">
                        <Link to="/projects" onClick={changePage}><i class="fas fa-laptop-code"></i><span class="icon-name">Projects</span></Link>
                    </li>
                </ul>
            </div>
        </ul>
    </nav>
  );
}

export default Nav;
