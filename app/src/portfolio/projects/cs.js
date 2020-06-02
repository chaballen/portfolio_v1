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

class CS extends Component {
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
                        <h3>Projects</h3>
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
                            <img src={''} alt={'Battleship'}/>
                            <span>
                                <h4>Battleship</h4>
                                <p>description</p>
                                <a href={''} id={'goTo'}>Play Game</a>
                            </span>
                        </div>

                        <h3>Papers</h3>
                        <div className={'project'}>
                            <img src={''} alt={'ALPHA'}/>
                            <span>
                                <h4>ALPHA</h4>
                                <p>description</p>
                                <a href={''} id={'goTo'}>Read Paper</a>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={''} alt={'D-Statistic'}/>
                            <span>
                                <h4>D-Stat</h4>
                                <p>description</p>
                                <a href={''} id={'goTo'}>Read Paper</a>
                            </span>
                        </div>
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

export default CS;