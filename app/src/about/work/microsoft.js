import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import styles from '../../styles.css';
import microsoftLogo from '../../images/microsoft.png';
import {StyleSheet, css} from "aphrodite";
import {zoomIn} from "react-animations";

const animate = StyleSheet.create({
    zoomIn: {
        animationName: zoomIn,
        animationDuration: '2s'
    }
})

class Microsoft extends Component {
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
                             src={microsoftLogo}
                             alt={'Microsoft'}/>
                        <h3>Microsoft</h3>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>Software Engineering Intern</h4>
                            <h5>May 2018 - August 2018</h5>
                        </div>
                        <p>
                            As a Software Engineering Intern on the O365 Core Insights, Data Engineering,
                            & Analytics (IDEAs) Team, I developed a data pipeline solution for long-term
                            storage and analysis of Azure telemetry data for the internal website my team
                            managed, Lynx, which tracks tenants' O365 usage and subscription information.
                            I also presented analyses of the data in an administrator page on the Lynx
                            website. For this project, I:
                            <ul>
                                <li>Wrote a detailed technical spec outlining the pipeline process, work
                                    items, data points for analysis, and overall goals for my prototype.</li>
                                <li>Developed the telemetry data pipeline using Azure Blob Storage, Azure
                                    Data Lake Storage, Cosmos Database, Azure Data Factory, Databricks,
                                    and Databuild.</li>
                                <li>Implemented the schema for the data in the Data Lake and Cosmos DB.</li>
                                <li>Wrote C# processors to read and format the data and Scope scripts to
                                    aggregate and analyze it.</li>
                                <li>Developed an administrator page in Lynx presenting visualizations of
                                    user behavior analyses using React.js, Redux, and TypeScript.</li>
                            </ul>
                        </p>
                    </div>
                    <div className={'column'}>
                        <div className={'head'}>
                            <h4>Explorer Intern</h4>
                            <h5>May 2019 - August 2019</h5>
                        </div>
                        <p>
                            During my first internship, I was part of the Explorer program, and
                            I worked in a pod with two other interns and gained experience in both
                            project management and software engineering. As part of the O365 Core
                            Security Engineering Team, my pod developed a data pipeline for storing,
                            analyzing, and presenting CIS (Center for Internet Security) configuration
                            scans and STIGs (Security Technical Implementation Guides) so that teams
                            across Microsoft could view vulnerabilities in configurations of hosts
                            running Office 365. In this internship, I:
                            <ul>
                                <li>Developed a technical spec outlining the pipeline process, work
                                    items, data points for analysis, and overall goals for our prototype.</li>
                                <li>Created a PowerBI report to present and visualize our analyses.</li>
                                <li>Implemented the schema for and C# scripts to normalize and insert
                                    our data into a SQL Data Warehouse.</li>
                                <li>Pulled processed data from the Data Warehouse to Azure Analysis services
                                    to create relationships in the data and connect to Power BI for presenting.</li>
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

export default Microsoft;