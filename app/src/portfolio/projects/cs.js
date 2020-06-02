import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../../styles.css";
import {css, StyleSheet} from "aphrodite";
import {zoomIn} from "react-animations";
import AlphaRax from '../../images/alpha-raxml.png';
import Battleship from '../../images/battleship.png';
import AlphaStat from '../../images/alpha-stat.png';
import Dgen from '../../images/dgen.png';

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
                            <img src={AlphaRax} alt={'ALPHA'}/>
                            <span>
                                <h4>ALPHA</h4>
                                <p>
                                    ALPHA is a python-based toolkit for automated local phylogenomic analyses.
                                    It provides functionalities for automated inference of local genealogies
                                    and analyses based on them through using sliding windows to create the
                                    local genealogies. ALPHA has a GUI, several import and export
                                    functionalities, and is freely available for installation and use. In this
                                    project, I planned the interface, developed many of the visualizations, and
                                    wrote the documentation for downloading and using ALPHA.
                                </p>
                                <a href={'https://github.com/chilleo/ALPHA'}
                                   id={'goTo'}>See Repo</a>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={Battleship} alt={'Battleship'}/>
                            <span>
                                <h4>Battleship</h4>
                                <p>
                                    This game was developed based on a homework prompt in my Web Development
                                    class. Using Javascript, I created a simple, one-player version of the
                                    Battleship board game that tracks players' best scores (minimum number of
                                    moves) through cookies and is hosted on Surge.
                                </p>
                                <a href={'http://comp431-battleship.surge.sh/'} id={'goTo'}>Play Game</a>
                            </span>
                        </div>

                        <h3>Papers</h3>
                        <div className={'project'}>
                            <img src={AlphaStat} alt={'ALPHA'}/>
                            <span>
                                <h4>ALPHA: a toolkit for Automated Local Phylogenomic Analyses</h4>
                                <p>
                                    Abstract: The evolutionary histories of individual regions across a
                                    genomic alignment—called ‘local genealogies’—can differ from each
                                    other, due to processes such as recombination. Elucidating and analyzing
                                    these local genealogies are important for a large number of inference
                                    tasks, including those pertaining to species phylogenies, evolutionary
                                    processes and trait mapping. In this paper, we present a toolkit for
                                    automated local phylogenomic analyses, or ALPHA. The purpose of this
                                    toolkit is to provide a wide array of functionalities for automated
                                    inference of local genealogies as well as analyses based on these local
                                    genealogies. The toolkit uses sliding windows to construct local genealogies
                                    and can compute a wide array of local phylogeny based statistics, such as the
                                    D-statistic. The toolkit comes with a graphical user interface and several
                                    import/export functionalities. Over the last few decades, much emphasis in
                                    phylogenomics has been put on developing tools for inferring species phylogenies.
                                    This toolkit complements those efforts by emphasizing the ‘local’ aspect of
                                    phylogenomics.
                                </p>
                                <a href={'https://doi.org/10.1093/bioinformatics/bty173'} id={'goTo'}>Read Paper</a>
                            </span>
                        </div>
                        <div className={'project'}>
                            <img src={Dgen} alt={'D-Statistic'}/>
                            <span>
                                <h4>D<sub>GEN</sub>: A Test Statistic for Detection of General Introgression
                                    Scenarios</h4>
                                <p>
                                    Abstract: When two species hybridize, one outcome is the integration of genetic
                                    material from one species into the genome of the other, a process known as
                                    introgression. Detecting introgression in genomic data is a very important question
                                    in evolutionary biology. However, given that hybridization occurs between closely
                                    related species, a complicating factor for introgression detection is the presence
                                    of incomplete lineage sorting, or ILS. The D-statistic, famously referred to as the
                                    “ABBA-BABA” test, was pro-posed for introgression detection in the presence of ILS
                                    in data sets that consist of four genomes. More recently, D<sub>FOIL</sub> — a set
                                    of statistics — was introduced to extend the D-statistic to data sets of five
                                    genomes. The major contribution of this paper is demonstrating that the invariants
                                    underlying both the D-statistic and D<sub>FOIL</sub> can be derived automatically
                                    from the probability mass functions of gene tree topologies under the null species
                                    tree model and alternative phylogenetic network model. Computational requirements
                                    aside, this automatic derivation provides a way to generalize these statistics to
                                    data sets of any size and with any scenarios of introgression. We demonstrate the
                                    accuracy of the general statistic, which we call D<sub>GEN</sub>, on simulated data
                                    sets with varying rates of introgression, and apply it to an empirical data set of
                                    mosquito genomes.
                                </p>
                                <a href={'https://doi.org/10.1101/348649'} id={'goTo'}>Read Paper</a>
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