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
                            <h5>August 2015 - December 2015</h5>
                        </div>
                        <p>
                            As a facilitator at HOBY NM, I received a scholarship to attend
                            HOBY's Advanced Leadership Academy (ALA), where I learned how to
                            put my leadership skills to work through helping others. After
                            returning from ALA, a fellow student and I hosted Roswell's first
                            CLeW, a one day seminar to jumpstart high school freshmen's
                            interest in leadership. As a CLeW Coordinator, I:
                            <ul>
                                <li>Planned and hosted a program consisting of community service, teamwork,
                                    and leadership activities based on the HOBY curriculum.</li>
                                <li>Corresponded with various businesses to secure a venue for the workshop
                                    and donations for shirts, food, and other supplies.</li>
                                <li>Managed the budget and documented details of the itinerary, food/drink
                                    sources, layout of the event, volunteers, and attendees.</li>
                                <li>Recruited and oversaw volunteers for facilitation, recruitment, and
                                    operations.</li>
                                <li>Corresponded with schools in Roswell and surrounding areas to recruit
                                    student ambassadors.</li>
                            </ul>
                        </p>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>HOBY-NM Facilitator</h4>
                            <h5>May 2015, May 2016</h5>
                        </div>
                        <p>
                            HOBY's state seminars are three-day conferences meant to teach high school
                            sophomores how to use and expand on their skills, personalities, and passions
                            to lead and help others. Ambassadors are split into groups facilitated by two
                            student facilitators and an adult mentor. In this position, I:
                            <ul>
                                <li>Assisted ambassadors in moving into their dorms, goal-setting, and learning
                                    about how to become better leaders.</li>
                                <li>Showed ambassadors how to practice HOBY's core values through engaging
                                    them in various leadership activities based on the HOBY curriculum.</li>
                                <li>Motivated ambassadors to step out of their comfort zones by encouraging
                                    them and creating a safe space for exploration and vulnerability.</li>
                                <li>Encouraged students from my high school to attend the seminar and grow their
                                    leadership potential.</li>
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