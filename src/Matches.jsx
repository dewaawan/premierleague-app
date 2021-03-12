import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faFutbol } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

export class Matches extends Component {

    state = {
        matches : []
    }

    componentDidMount(){
        const options = {
            headers : {'X-Auth-Token': '8781290b9c75447cb0222b660cd8aaec'}
        }
        axios.get("https://api.football-data.org/v2/competitions/PL/matches", options)
        .then(res =>{
            this.setState({
                matches : res.data.matches
            })
            console.log(this.state.matches)
        })
    }

    render() {
        const match = this.state.matches
        const m = match.filter(res => res.matchday === 1)
        return (
            <div>
                <div className="bg-gradient-to-r from-purple-700 to-purple-800 mx-0">
                    <p align="right" className=" text-5xl font-extrabold text-gray-50 p-20">Matches</p> 
                </div>

                <div className="container mx-auto flex flex-row justify-between border border-purple-800 rounded w-full my-10">
                    <div className="text-xl px-36 py-3 font-bold text-purple-800 cursor-pointer hover:bg-purple-800 hover:text-gray-50">
                        <FontAwesomeIcon icon={faArrowLeft} /> Preview
                    </div>
                    <span className="text-xl font-bold py-3 text-purple-800">
                        Matchday 1
                    </span>
                    <div className="text-xl px-36 py-3 font-bold text-purple-800 cursor-pointer hover:bg-purple-800 hover:text-gray-50">
                        Next <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>

                <div className="container mx-auto flex flex-col">
                    {m.map(res =>{
                    return (
                    <div className="grid grid-cols-7 mb-4 justify-between items-center border-t border-b hover:bg-purple-800 text-purple-800 hover:text-gray-50 border-purple-800 py-3">
                        <div className="text-lg font-semibold grid grid-cols-3 col-span-5">
                            <span align="right">{res.homeTeam.name}</span><div className="flex flex-row place-self-center justify-center space-x-4"><img className="h-7 w-7" src="https://resources.premierleague.com/premierleague/badges/25/t6@x2.png" alt="tottenham"/> <span align="center" className=" text-xl font-semibold bg-gray-900 text-white w-16 px-1">{res.score.fullTime.homeTeam} - {res.score.fullTime.awayTeam}</span> <img className="h-7 w-7" src="https://resources.premierleague.com/premierleague/badges/25/t8@x2.png" alt="Chelsea"/></div> <span align="left">{res.awayTeam.name}</span>
                        </div>
                        <div className="text-sm font-medium">
                            <FontAwesomeIcon icon={faFutbol} /> {res.referees[0].name}, <b>{res.referees[0].nationality}</b>
                        </div>
                        <div align="right" className="">
                            <div align="center" className="mr-3 cursor-pointer self-center w-24">
                                Detail <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                    )}
                    )}
                </div>
            </div>
        )
    }
}

export default Matches
