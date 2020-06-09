import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../../styles.css";
import {css, StyleSheet} from "aphrodite";
import {zoomIn} from "react-animations";
import ProductivityPdf from '../../pdfs/Chabrielle_Allen_Productivity.pdf';
import Foucault from '../../images/foucault.jpg';
import CultsPdf from '../../pdfs/Chabrielle_Allen_Empty_Self_Cults.pdf';
import Cults from '../../images/cults.jpg';
import CrusadesPdf from '../../pdfs/Chabrielle_Allen_Women_Crusades.pdf';
import Crusades from '../../images/crusades.jpg';
import RevelationPdf from '../../pdfs/Chabrielle_Allen_Violence_Revelation.pdf';
import Revelation from '../../images/revelation.jpg';
import FelliniPdf from '../../pdfs/Chabrielle_Allen_New_Beginning.pdf';
import Fellini from '../../images/fellini.jpg';

const animate = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '2s'
    }
})

class Reli extends Component {
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
                        <h3>Papers</h3>
                        <div className={'project'}>
                            <img src={Foucault} alt={'Michel Foucault'}/>
                            <span>
                                <h4>Subjectivity and the Productivity Movement</h4>
                                <p>
                                    My senior thesis class was on Michel Foucault's hermeneutics of the
                                    self, where I read and discussed many of his lectures and writings
                                    from 1975 to 1982. I chose to apply Foucault's conceptions of
                                    subjectivity, self-examination, confession, and self-actualization
                                    to the productivity and digital wellness movements fueled by
                                    technological advancement and discuss how doing so transforms them.
                                    In this paper, I examine Apple and Android's screen time tracking
                                    features, Microsoft Outlook's MyAnalytics, and bullet journaling as
                                    forms through which the techniques of self-examination and confession
                                    act to render individuals as subjects of productivity, and I argue
                                    that self-actualization is transformed in that reaching it means
                                    becoming one's most productive self rather than uncovering what is
                                    hidden about oneself.
                                </p>
                                <a href={ProductivityPdf} id={'goTo'}
                                   download={'Chabrielle_Allen_Subjectivity_Productivity'}>Download Paper</a>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={Cults} alt={'Cult'}/>
                            <span>
                                <h4>The 'Empty Self' in Relation to Cult Development</h4>
                                <p>
                                    I wrote this paper for a class called "The Psychology of Religion."
                                    In it, I discuss how psychological conceptions of the self changed
                                    to form the 'Empty Self', and I argue that this conception contributed
                                    to the rise of cults in the 1960s through examining the psychology
                                    of cult leaders, members, and recruitment methods.
                                </p>
                                <a href={CultsPdf} id={'goTo'}
                                   download={'Chabrielle_Allen_Empty_Self_Cults'}>Download Paper</a>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={Crusades} alt={'Florine of Burgundy'}/>
                            <span>
                                <h4>Women's Roles in the Crusades</h4>
                                <p>
                                    For a course I took on the history of the Crusades, I decided to
                                    examine prominent Christian and Muslim female leaders of the
                                    Crusader period and discuss how they came into power, obstacles
                                    they faced, and their impact on women's societal roles thereafter.
                                </p>
                                <a href={CrusadesPdf} id={'goTo'}
                                   download={'Chabrielle_Allen_Women_Crusades'}>Download Paper</a>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={Revelation} alt={'Revelation Imagery'}/>
                            <span>
                                <h4>Violence in the Book of Revelation</h4>
                                <p>
                                    In my final paper for a class I took on apocalyptic literature, I compared
                                    how interpreting the Book of Revelation's imagery literally offered
                                    a much more violent understanding of the end-time than the metaphorical
                                    interpretation. I concluded that the metaphorical interpretation offers
                                    a much more nuanced, nonviolent depiction of both God and the apocalypse.
                                </p>
                                <a href={RevelationPdf} id={'goTo'}
                                   download={'Chabrielle_Allen_Violence_Revelation'}>Download Paper</a>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={Fellini} alt={'8 1/2 by Federico Fellini'}/>
                            <span>
                                <h4>Fellini and Bergman's Searches for a New Beginning</h4>
                                <p>
                                    In a class called "Losing Your Religion in Film," I wrote my final
                                    paper on the authors of the films "8 &frac12;" and "Wild Strawberries"
                                    and their searches for new beginnings through the film's protagonists.
                                    In this paper, I conclude that both Federico Fellini and Ingmar Bergman's
                                    pursuits of a new beginning were fueled by internal conflict about
                                    finding happiness in spite of having chaotic, fragmented lives, and they
                                    found closure by reflecting on their turmoils through their films'
                                    protagonists.
                                </p>
                                <a href={FelliniPdf} id={'goTo'}
                                   download={'Chabrielle_Allen_Women_Crusades'}>Download Paper</a>
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

export default Reli;