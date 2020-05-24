import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../../styles.css";
import hanszenLogo from '../../images/hanszen.png';
import {StyleSheet, css} from "aphrodite";
import {zoomIn} from "react-animations";

const animate = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '2s'
    }
})

class Hanszen extends Component {
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
                        <img id={'summary'}
                             src={hanszenLogo}
                             alt={'Hanszen'}/>
                        <h3>Hanszen Residential College at Rice University</h3>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>College Night/Crane Day (CNCD) Committee Head</h4>
                            <h5>August 2017 - March 2020</h5>
                        </div>
                        <p>
                            test
                            <ul>
                                <li>
                                    test
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>Orientation Week Advisor</h4>
                            <h5>August 2018 - May 2019</h5>
                        </div>
                        <p>
                            test
                            <ul>
                                <li>
                                    test
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>Junior Class Representative</h4>
                            <h5>May 2019 - August 2019</h5>
                        </div>
                        <p>
                            test
                            <ul>
                                <li>
                                    test
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>Rice Program Council (RPC) Representative</h4>
                            <h5>May 2019 - August 2019</h5>
                        </div>
                        <p>
                            test
                            <ul>
                                <li>
                                    test
                                </li>
                            </ul>
                        </p>
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

export default Hanszen;