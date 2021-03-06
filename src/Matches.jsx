import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faFutbol } from "@fortawesome/free-solid-svg-icons";

export class Matches extends Component {
    render() {
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
                        Matchday 30
                    </span>
                    <div className="text-xl px-36 py-3 font-bold text-purple-800 cursor-pointer hover:bg-purple-800 hover:text-gray-50">
                        Next <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </div>

                <div className="container mx-auto flex flex-col">
                    <div className="flex flex-row mb-4 justify-between items-center border-t border-b hover:bg-purple-800 text-purple-800 hover:text-gray-50 border-purple-800 py-3">
                        <div className="text-lg font-semibold flex flex-row justify-between items-center w-1/4">
                            Tottenham <img className="h-7 w-7" src="https://resources.premierleague.com/premierleague/badges/25/t6@x2.png" alt="tottenham"/> <span className="text-xs font-semibold">VS</span> <img className="h-7 w-7" src="https://resources.premierleague.com/premierleague/badges/25/t8@x2.png" alt="Chelsea"/> Chelsea
                        </div>
                        <div className="text-sm font-medium w-1/4">
                            <FontAwesomeIcon icon={faFutbol} /> White Hart Lane Stadium, <b>London</b>
                        </div>
                        <div align="right" className="w-1/4">
                            <div align="center" className="mr-3 cursor-pointer self-center w-24">
                                Detail <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mb-4 justify-between items-center border-t border-b hover:bg-purple-800 text-purple-800 hover:text-gray-50 border-purple-800 py-3">
                        <div className="text-lg font-semibold flex flex-row justify-between items-center w-1/4">
                            Tottenham <img className="h-7 w-7" src="https://resources.premierleague.com/premierleague/badges/25/t6@x2.png" alt="tottenham"/> <span className="text-xs font-semibold">VS</span> <img className="h-7 w-7" src="https://resources.premierleague.com/premierleague/badges/25/t8@x2.png" alt="Chelsea"/> Chelsea
                        </div>
                        <div className="text-sm font-medium w-1/4">
                            <FontAwesomeIcon icon={faFutbol} /> White Hart Lane Stadium, <b>London</b>
                        </div>
                        <div align="right" className="w-1/4">
                            <div align="center" className="mr-3 cursor-pointer self-center w-24">
                                Detail <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Matches
