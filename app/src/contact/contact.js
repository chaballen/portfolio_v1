import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from '../styles.css';
import linkedinLogo from '../images/linkedin.jpg';
import githubLogo from '../images/github.png';
import {css, StyleSheet} from "aphrodite";
import {zoomIn} from "react-animations";

const animate = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '2s'
    }
})

class Contact extends Component {
    render() {
        return (
            <div className={styles.container}>
                <header>Chabrielle Allen</header>
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/portfolio'}>Portfolio</NavLink>
                    <NavLink id={'here'} to={'/contact'}>Contact</NavLink>
                </nav>
                <div className={css(animate.zoomIn)}>
                    <div className={'contact'}>
                        <h3>Contact Information</h3>
                        <p>Email: chabrielle.allen@gmail.com</p>
                        <p>Mail: PO Box 1146, Roswell, NM 88202</p>
                        <a href={'https://linkedin.com/in/chabrielle-allen'}>
                            <img id={'btn'}
                                 src={linkedinLogo}
                                 alt={'LinkedIn'}/>
                        </a>
                        <a href={'https://github.com/chaballen'}>
                            <img id={'btn'}
                                 src={githubLogo}
                                 alt={'GitHub'}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;