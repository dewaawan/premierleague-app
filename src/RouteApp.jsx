import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./style/tailwind.css"
import Home from './Home';
import { Standings } from "./Standings";
import { Teams } from "./Teams";

export class RouteApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/">Matches</Link>
                    <Link to="/standings">Standings</Link>
                    <Link to="/teams">Teams</Link>
                </div>
                <Route path="/" exact component={Home} />
                <Route path="/standings" component={Standings} />
                <Route path="/teams" component={Teams} />
            </BrowserRouter>
        )
    }
}

export default RouteApp
