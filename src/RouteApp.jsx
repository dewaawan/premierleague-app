import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./style/tailwind.css"
import Home from './Home';
import { Standings } from "./Standings";
import { Teams } from "./Teams";
import Matches from "./Matches";

export class RouteApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container mx-10">
                    <div className="flex flex-row font-semibold text-lg my-5">                    
                        <Link to="/"><div className="mx-5 pb-2 transition duration-200 ease-in-out border-b-4 border-transparent hover:border-purple-800">Home</div></Link>
                        <Link to="/matches"><div className="mx-5 pb-2 transition duration-200 ease-in-out border-b-4 border-transparent hover:border-purple-800">Matches</div></Link>
                        <Link to="/standings"><div className="mx-5 pb-2 transition duration-200 ease-in-out border-b-4 border-transparent hover:border-purple-800">Standings</div></Link>
                        <Link to="/teams"><div className="mx-5 pb-2 transition duration-200 ease-in-out border-b-4 border-transparent hover:border-purple-800">Teams</div></Link>
                    </div>
                </div>
                <Route path="/" exact component={Home} />
                <Route path="/standings" component={Standings} />
                <Route path="/teams" component={Teams} />
                <Route path="/matches" component={Matches} />
            </BrowserRouter>
        )
    }
}

export default RouteApp
