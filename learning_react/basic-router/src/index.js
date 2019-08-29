import React from 'react';
import { render } from 'react-dom';

import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import {Home} from './pages/Home'
import {About} from './pages/About'
import {Contact} from './pages/Contact'
import {Whoops404} from './pages/NotFound'


render (
    <HashRouter>
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Redirect from="/history" to="/about/history" />
                <Route component={Whoops404} />
            </Switch>
        </div>
    </HashRouter>,
    document.getElementById('react-container')
);
