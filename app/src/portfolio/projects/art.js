import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../../styles.css";
import {css, StyleSheet} from "aphrodite";
import {zoomIn} from "react-animations";

const animate = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '2s'
    }
})

class Art extends Component {
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
                <div className={css(animate.zoomIn)}>
                    <div className={'body'}>
                        <h3>Oil Paintings</h3>
                        <div className={'project'}>
                            <img src={''} alt={'ALPHA'}/>
                            <span>
                                <h4>ALPHA</h4>
                                <p>description</p>
                                <a href={'https://github.com/chilleo/ALPHA'}
                                   id={'goTo'}>See Repo</a>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={''} alt={'ALPHA'}/>
                            <span>
                                <h4>ALPHA</h4>
                                <p>description</p>
                                <a href={'https://github.com/chilleo/ALPHA'}
                                   id={'goTo'}>See Repo</a>
                            </span>
                        </div>
                        <h3>Comic Strips</h3>
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

export default Art;