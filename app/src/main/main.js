import React, {Component} from 'react';
import styles from "../styles.css";
import {css, StyleSheet} from "aphrodite";
import {fadeInLeft, fadeIn} from "react-animations";

const animate1 = StyleSheet.create({
    fadeInLeft: {
        animationName: fadeInLeft,
        animationDuration: '2s',
    }
})
const animate2 = StyleSheet.create({
    fadeInLeft: {
        animationName: fadeInLeft,
        animationDuration: '4s',
    }
})
const animate3 = StyleSheet.create({
    fadeInLeft: {
        animationName: fadeInLeft,
        animationDuration: '6s',
    }
})
const animate4 = StyleSheet.create({
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '8s',
    }
})

class Main extends Component {
    render() {
        return (
            <div className={styles.container}>
                <header>Chabrielle Allen</header>
                <div className={'statement'}>
                    <h1 className={css(animate1.fadeInLeft)}>Art.</h1>
                    <h1 className={css(animate2.fadeInLeft)}>Engineering.</h1>
                    <h1 className={css(animate3.fadeInLeft)}>People.</h1>
                    <div className={'bio'}>
                    <p className={css(animate4.fadeIn)}>
                        Hello, I'm Chabrielle, an aspiring software engineer
                        passionate about the combination of art, engineering,
                        and people: user experience. I am currently seeking
                        jobs in frontend/ fullstack development or data
                        analysis focused on user behavior.
                    </p>
                    </div>
                </div>
                <div className={'nav'}>
                    <a id={'navAbout'} href={'/about'}> About Me</a>
                    <a id={'navPortfolio'} href={'/portfolio'}> Portfolio</a>
                    <a id={'navContact'} href={'/contact'}> Contact</a>
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

export default Main;