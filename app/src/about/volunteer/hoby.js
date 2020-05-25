import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../../styles.css";
import hobyNMLogo from '../../images/hoby-nm.png';
import {css, StyleSheet} from "aphrodite";
import {zoomIn} from "react-animations";

const animate = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '2s'
    }
})

class Hoby extends Component {
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
                    <img id={'summary'}
                         src={hobyNMLogo}
                         alt={'HOBY'}/>
                    <h6>For more information about HOBY,
                        <a id={'inline'}
                           href={'https://www.hoby.org/about/vision-mission/'}>
                            click here.</a></h6>
                    <h3>Hugh O'Brian Youth Leadership - New Mexico</h3>
                    <p>
                        HOBY is an international organization dedicated to instilling
                        strong leadership skills and a passion for service in young
                        adults. After attending New Mexico's HOBY Seminar as an
                        ambassador, I returned as a volunteer facilitator and later
                        hosted a condensed local seminar in Roswell, New Mexico.
                    </p>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>Community Leadership Workshop (CLeW) Coordinator</h4>
                            <h5>August 2018 - May 2019</h5>
                        </div>
                        <p>
                            As a representative of my class in Hanszen's student government, I:
                            <ul>
                                <li>Planned class-oriented events to facilitate bonding and culture.</li>
                                <li>Gathered opinions on student-government decisions and issues from
                                    other juniors.</li>
                                <li>Voted in line with juniors' opinions at government cabinet meetings.</li>
                            </ul>
                        </p>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>HOBY-NM Facilitator</h4>
                            <h5>August 2017 - May 2018</h5>
                        </div>
                        <p>
                            <a id={'inline'}
                               href={'https://riceprogramcouncilsite.wordpress.com/'}>RPC</a>
                            is an organization at Rice that coordinates various events throughout
                            the year, such as our fall and spring dances. In this position, I:
                            <ul>
                                <li>Communicated information regarding RPC events to students at
                                    Hanszen.</li>
                                <li>Provided RPC with feedback on events and provided information
                                    gathered from Hanszen students.</li>
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

export default Hoby;