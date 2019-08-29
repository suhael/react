import React from "react";
import {PageTemplate} from "./Template"
import {SubMenu} from "./SubMenu"
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'

export const Company = () =>
    <h1>Company</h1>

export const History = () =>
    <h1>History</h1>

export const Services = () =>
    <h1>Services</h1>

export const About = ({ match }) =>
    <PageTemplate>
        <section className="about">
            <Route component={SubMenu} />
            <Route exact path="/about" component={Company}/>
            <Route path="/about/history" component={History}/>
            <Route path="/about/services" component={Services}/>
        </section>
        <h1>About</h1>
    </PageTemplate>
