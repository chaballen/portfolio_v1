import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from '../styles.css';
import {zoomIn} from 'react-animations';
import {StyleSheet, css} from "aphrodite";
import cruisePhoto from '../images/cruise.jpg';
import microsoftLogo from '../images/microsoft.png';
import riceCSLogo from '../images/rice-cs.jpg';
import hanszenLogo from '../images/hanszen.png';
import hobyNMLogo from '../images/hoby-nm.png';

const animate = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '2s'
    }
})

class About extends Component {
    render() {
        return (
            <div className={styles.container}>
                <header>Chabrielle Allen</header>
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink id={'here'} to={'/about'}>About</NavLink>
                    <NavLink to={'/portfolio'}>Portfolio</NavLink>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </nav>
                <div className={css(animate.zoomIn)}>
                <div className={'body'}>
                    <div className={'head'}>
                    <h3>Rice University Class of 2020</h3>
                    <h4>B.A. in Religion, Focus on Culture and Society</h4>
                    <h5>Degree Conferral: August 2020</h5>
                    <img id={'summary'}
                         src={cruisePhoto}
                         alt={'Chabrielle'}/>
                    </div>
                    <p>
                        Hello, I'm Chabrielle. Originally from Roswell, New Mexico,
                        I am now a student at Rice University in Houston, TX,
                        majoring in Religion with a focus on cultural interpretation
                        and reproduction of religion. Many of the religion classes I've
                        taken are interdisciplinary, and I've even been able to
                        incorporate my technical interests into my studies! While
                        my major is based around the intersections of sociology and
                        religious studies, I am passionate about software development
                        and data analysis and intend to pursue a career in technology.
                        Below, you'll find summaries of my work and volunteer
                        experience. Check out<a id={'inline'} href={'/portfolio'}>my portfolio</a>
                        for a copy of my resume, a breakdown of my skills, some of my
                        favorite projects, pictures of my art, papers I am
                        co-authored on, and some of my work in religious studies!
                    </p>
                    <h3>Work Experience</h3>
                    <a href={'/microsoft'}>
                    <img id={'summary'}
                         src={microsoftLogo}
                         alt={'Microsoft'}/>
                    </a>
                    <a href={'/rice'}>
                    <img id={'summary'}
                         src={riceCSLogo}
                         alt={'Rice CS'}/>
                    </a>
                    <h3>Volunteering</h3>
                    <a href={'/hanszen'}>
                        <img id={'summary'}
                             src={hanszenLogo}
                             alt={'Hanszen'}/>
                    </a>
                    <a href={'/hoby'}>
                        <img id={'summary'}
                             src={hobyNMLogo}
                             alt={'HOBY'}/>
                    </a>
                </div>
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

export default About;