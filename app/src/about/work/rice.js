import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../../styles.css";
import riceCSLogo from '../../images/rice-cs.jpg';
import {css, StyleSheet} from "aphrodite";
import {zoomIn} from "react-animations";

const animate = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '2s'
    }
})

class Rice extends Component {
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
                             src={riceCSLogo}
                             alt={'Rice CS'}/>
                        <h3>Rice University Computer Science</h3>
                        <h4>Rice University Data Sciences Student Program (RUDSSP)</h4>
                    </div>
                    <div>
                        <div className={'head'}>
                            <h4>Bioinformatics Research Assistant</h4>
                            <h5>May 2017 - May 2018</h5>
                        </div>
                        <p>
                            During my second year at Rice, I was a Research Assistant in the computer
                            science department working on a bioinformatics project with two other students.
                            Initially, our project was to develop a GUI, called ALPHA, for biologists to more
                            easily analyze large amounts of DNA data in the form of phylogenetic trees through
                            RaxML and create standardized visualizations. After this was completed, we pivoted
                            our focus to generalizing the D-statistic beyond four taxa, which biologists use to
                            understand rates of hybridization between species, and we were successful in
                            generalizing it up to seven taxa. In this position, I:
                            <ul>
                                <li>Wrote detailed documentation for downloading and using ALPHA.</li>
                                <li>Created graphics displaying statistical analyses and comparisons using
                                    analysis software such as BioPython, Dendropy, ETE Toolkit, PhyloNet,
                                    and RAxML.</li>
                                <li>Planned out the interface to make it user-friendly and efficient using
                                    PyQt.</li>
                                <li>Ran simulations to develop and confirm a generalized D-statistic using
                                    MakeSample (MS), Seq-Gen, and ALPHA.</li>
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

export default Rice;