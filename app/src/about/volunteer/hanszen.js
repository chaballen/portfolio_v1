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
                        <h6>For more information about Hanszen College,
                            <a id={'inline'}
                               href={'https://hanszen.rice.edu/about/history/'}>
                                click here.</a></h6>
                        <h3>Hanszen Residential College at Rice University</h3>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>College Night/Crane Day (CNCD) Committee Head</h4>
                            <h5>August 2017 - May 2018, August 2019 - March 2020</h5>
                        </div>
                        <p>
                            Hanszen has two College Nights and one Crane Day per year, and they
                            provide a way for students to relax, enjoy the outdoors, and socialize.
                            As a committee head, I worked with other students and Rice Student
                            Activities to ensure that our plans met safety standards. In particular, I:
                            <ul>
                                <li>Planned the themes and logistics of, publicized, and hosted these
                                    events celebrating Hanszen culture and facilitating bonding between
                                    students at Hanszen.</li>
                                <li>Managed the budget and documented details of itineraries, food/drink
                                    sources, layout of the events, volunteers, and backup to ensure
                                    safety.</li>
                                <li>Oversaw team of coordinators and volunteers and communicated their
                                    roles in College Night.</li>
                            </ul>
                        </p>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>Orientation Week Advisor at Hanszen College</h4>
                            <h5>August 2018 - May 2019</h5>
                        </div>
                        <p>
                            Orientation (O-Week) at Rice is an intensive, week-long introduction to the
                            university. At Hanszen, O-Week groups consist of three advisors, one co-advisor
                            from another residential college, and eight to ten new students. As an advisor, I:
                            <ul>
                                <li>Participated in co-advisor interviews and assisted in second-round
                                    interview selection.</li>
                                <li>Informed new students of resources, clubs, and events at Rice.</li>
                                <li>Assisted new students in moving into their dorms, structuring
                                    short and long-term class schedules, and finding class and office
                                    locations.</li>
                                <li>Provided ongoing support after the conclusion of O-Week to help
                                    new students adjust more smoothly through regular individual
                                    check-ins and weekly group lunches.</li>
                            </ul>
                        </p>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>Junior Class Representative</h4>
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
                            <h4>Rice Program Council (RPC) Representative</h4>
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

export default Hanszen;