import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../styles.css";
import resumeLogo from "../images/resume.png";
import reliLogo from "../images/reli.png";
import alphaLogo from "../images/alpha.png";
import artLogo from "../images/art.jpg";

class Portfolio extends Component {
    render() {
        return (
            <div className={styles.container}>
                <header>Chabrielle Allen</header>
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink id={'here'} to={'/portfolio'}>Portfolio</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </nav>
                <div className={'body'}>
                    <a id={'pfImage'} href={'/resume'}>
                        <img id={'summary'}
                             src={resumeLogo}
                             alt={'Resume'}/>
                        <div>Resume</div>
                    </a>
                    <a id={'pfImage'} href={'/cs'}>
                        <img id={'summary'}
                             src={alphaLogo}
                             alt={'CS'}/>
                        <div>Computer Science</div>
                    </a>
                    <a id={'pfImage'} href={'/art'}>
                        <img id={'summary'}
                             src={artLogo}
                             alt={'Art'}/>
                        <div>Artwork</div>
                    </a>
                    <a id={'pfImage'} href={'/reli'}>
                        <img id={'summary'}
                             src={reliLogo}
                             alt={'Religion'}/>
                        <div>Religious Studies</div>
                    </a>
                </div>
                <footer>
                    <p>chabrielle.allen@gmail.com</p>
                    <nav>
                        <a href={'https://linkedin.com/in/chabrielle-allen'}>LinkedIn</a>
                        <a href={'https://github.com/chaballen'}>GitHub</a>
                    </nav>
                    <p>Website Created Using 'npx create-react-app'</p>
                </footer>
            </div>
        );
    }
}

export default Portfolio;