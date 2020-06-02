import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../../styles.css";
import {css, StyleSheet} from "aphrodite";
import {zoomIn} from "react-animations";
import ResumePdf from '../../pdfs/Chabrielle_Allen_Resume.pdf';

const animate = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '2s'
    }
})

class Resume extends Component {
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
                        <a href={ResumePdf} id={'download'}
                           download={'Chabrielle_Allen_Resume'}>Download PDF</a>

                        <ul id={'res'}>
                            <h3>Education</h3>
                            <h4>Bachelor of Arts in Religion</h4>
                            <ul>
                                <li>Rice University - Houston, TX</li>
                                <li>Grad Date: August 2020</li>
                            </ul>
                            <h5>Relevant Courses</h5>
                            <ul>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <li>Computational Thinking</li>
                                        </td>
                                        <td>
                                            <li>Research - Computer Science Projects</li>
                                        </td>
                                        <td>
                                            <li>Web Development</li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <li>Research - Cross-Training in Data Science</li>
                                        </td>
                                        <td>
                                            <li>Intro to Object-Oriented Programming</li>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <li>Algorithmic Thinking and Discrete Math</li>
                                        </td>
                                        <td>
                                            <li>Ethics and Accountability in Computer Science</li>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </ul>
                            <h3 id={'skills'}>Skills <h4>1 star: novice - 5 stars: expert</h4></h3>
                            <h4>Programming Languages</h4>
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <ul>React.js
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>Javascript
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>HTML5
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>CSS3
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul>Typescript
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>Redux
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>SQL
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>Python
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul>C#
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>C++
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>Java
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <h4>Technologies</h4>
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <ul>Azure Cloud Services
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>Github
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>Power BI
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>Microsoft SQL Server Management Studio
                                            <span className={'stars'}>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                                <span className="fa fa-star"></span>
                                            </span>
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <h3>Work Experience</h3>
                            <h4>Software Engineering Intern - M365 Core IDEAs Team</h4>
                            <h5>Microsoft - Redmond, WA | May 2019 - August 2019</h5>
                            <ul>
                                <li>Developed a data pipeline and displayed analyses of telemetry
                                    data in an internal website</li>
                                <a id={'inline'} href={'/microsoft'}><li>Read More</li></a>
                            </ul>
                            <h4>Explorer Intern - O365 Core Security Engineering Team</h4>
                            <h5>Microsoft - Redmond, WA | May 2018 - August 2018</h5>
                            <ul>
                                <li>Developed schema and analyses of data for presentation in Power
                                    BI report</li>
                                <a id={'inline'} href={'/microsoft'}><li>Read More</li></a>
                            </ul>
                            <h4>Bioinformatics Research Assistant - RUDSSP</h4>
                            <h5>Rice University - Houston, TX | May 2017 - May 2018</h5>
                            <ul>
                                <li>Developed visualizations and documentation for biologist-oriented
                                    data analysis tool, <a id={'inline'} href={'https://github.com/chilleo/ALPHA'}>
                                        ALPHA</a></li>
                                <li>Ran simulations to develop and confirm a generalized D-Statistic</li>
                                <a id={'inline'} href={'/rice'}><li>Read More</li></a>
                            </ul>
                            <h3>Leadership</h3>
                            <h4>Coordinator - Hanszen CNCD Committee</h4>
                            <h5>Hanszen, Rice University - Houston, TX | August 2017 - March 2020</h5>
                            <ul>
                                <li>Coordinated tri-annual events to enhance Hanszen culture and encourage
                                    bonding between students</li>
                                <a id={'inline'} href={'/hanszen'}><li>Read More</li></a>
                            </ul>
                        </ul>
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

export default Resume;