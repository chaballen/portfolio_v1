import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../../styles.css";
import {css, StyleSheet} from "aphrodite";
import {zoomIn} from "react-animations";
import SelfCare from '../../images/cults.jpg';
import Scuba from '../../images/cults.jpg';
import Odd from '../../images/cults.jpg';
import Seashells from '../../images/cults.jpg';
import Jimi from '../../images/cults.jpg';
import NinePanel from '../../images/cults.jpg';

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
                            <img src={SelfCare} alt={'painting'}/>
                            <span>
                                <h4>'Self Care'</h4>
                                <h5>2019, Oil on Panel</h5>
                                <p>
                                    For my first assignment in Beginning Painting, I selected a candle,
                                    mug, and face mask, and my professor provided the image on the left.
                                </p>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={Scuba} alt={'painting'}/>
                            <span>
                                <h4>'Ominous Scuba Diver'</h4>
                                <h5>2019, Oil on Cardstock</h5>
                                <p>
                                    In this painting, I transformed a man holding a strange contraption
                                    on a cardstock print of a book cover into an underwater scuba diver.
                                </p>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={Odd} alt={'painting'}/>
                            <span>
                                <h4>'An Odd Arrangement'</h4>
                                <h5>2019, Oil on Panel</h5>
                                <p>
                                    Here, I painted an arrangement of items set up by fellow students in
                                    my class.
                                </p>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={Seashells} alt={'painting'}/>
                            <span>
                                <h4>'Seashells'</h4>
                                <h5>2019, Oil on Panel</h5>
                                <p>
                                    This was my final painting for my Beginning Painting class, and
                                    it was inspired by Charline von Heyl's style.
                                </p>
                                <a href={'https://www.petzel.com/artists/charline-von-heyl'}
                                   id={'goTo'}>See Charline von Heyl's Art</a>
                            </span>
                        </div>
                        <h3>Comic Strips</h3>
                        <div className={'project'}>
                            <img src={Jimi} alt={'Jimi Hendrix Comic'}/>
                            <span>
                                <h4>'Jimi Hendrix'</h4>
                                <h5>2020, Digital</h5>
                                <p>
                                    This comic character's style was inspired by Ivan Brunetti's work.
                                </p>
                                <a href={'https://www.ivanbrunetti.com/'}
                                   id={'goTo'}>See Ivan Brunetti's Comics</a>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={NinePanel} alt={'9 Panel Comic'}/>
                            <span>
                                <h4>'9 Panel Comic'</h4>
                                <h5>2020, Digital</h5>
                                <p>
                                    description
                                </p>
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

export default Art;