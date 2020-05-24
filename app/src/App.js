import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Main from './main/main';
import Microsoft from './about/work/microsoft';
import Rice from './about/work/rice';
import Hanszen from './about/volunteer/hanszen';
import Hoby from './about/volunteer/hoby';
import About from './about/about';
import Portfolio from './portfolio/portfolio';
import Resume from './portfolio/projects/resume';
import CS from './portfolio/projects/cs';
import Art from './portfolio/projects/art';
import Reli from './portfolio/projects/reli';
import Contact from './contact/contact';

class App extends Component {
    render() {
        return (
            <div className={'container'}>
                <BrowserRouter>
                    <div className={'pages'}>
                        <Route exact path={'/'} component={Main}/>

                        <Route exact path={'/about'} component={About}/>
                        <Route exact path={'/microsoft'} component={Microsoft}/>
                        <Route exact path={'/rice'} component={Rice}/>
                        <Route exact path={'/hanszen'} component={Hanszen}/>
                        <Route exact path={'/hoby'} component={Hoby}/>

                        <Route exact path={'/portfolio'} component={Portfolio}/>
                        <Route exact path={'/resume'} component={Resume}/>
                        <Route exact path={'/cs'} component={CS}/>
                        <Route exact path={'/art'} component={Art}/>
                        <Route exact path={'/reli'} component={Reli}/>

                        <Route exact path={'/contact'} component={Contact}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;