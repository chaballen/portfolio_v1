import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
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
                    <Route exact path={'/'} component={Main}/>

                    <Route path={'/about'} component={About}/>
                    <Route path={'/microsoft'} component={Microsoft}/>
                    <Route path={'/rice'} component={Rice}/>
                    <Route path={'/hanszen'} component={Hanszen}/>
                    <Route path={'/hoby'} component={Hoby}/>

                    <Route path={'/portfolio'} component={Portfolio}/>
                    <Route path={'/resume'} component={Resume}/>
                    <Route path={'/cs'} component={CS}/>
                    <Route path={'/art'} component={Art}/>
                    <Route path={'/reli'} component={Reli}/>

                    <Route exact path={'/contact'} component={Contact}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;