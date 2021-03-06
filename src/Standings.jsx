import React, { Component } from 'react'

export class Standings extends Component {
    render() {
        return (
            <div>
                <div className="bg-gradient-to-r from-purple-700 to-purple-800 mx-0">
                    <p align="right" className=" text-5xl font-extrabold text-gray-50 p-20">Standings</p> 
                </div>
                <div className="container mx-auto my-10">
                    <table className="bg-white rounded-md w-full">
                        <thead>    
                            <tr align="center" className="h-10 text-sm font-semibold text-gray-700">
                                <th>Position</th>
                                <th align="left" colSpan="2">Club</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Drawn</th>
                                <th>Lost</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr align="center" className="h-16 border-t border-gray-300">
                                <td>1</td>
                                <td align="left">Tottenham</td>
                                <td align="left"><img className="h-7 w-7" src="https://resources.premierleague.com/premierleague/badges/25/t6@x2.png" alt="tottenham"/></td>
                                <td>20</td>
                                <td>18</td>
                                <td>0</td>
                                <td>2</td>
                                <td>40</td>
                                <td>10</td>
                                <td>30</td>
                                <td>36</td>
                            </tr>
                            <tr align="center" className="h-16 border-t border-gray-300">
                                <td>1</td>
                                <td align="left">Tottenham</td>
                                <td align="left"><img className="h-7 w-7" src="https://resources.premierleague.com/premierleague/badges/25/t6@x2.png" alt="tottenham"/></td>
                                <td>20</td>
                                <td>18</td>
                                <td>0</td>
                                <td>2</td>
                                <td>40</td>
                                <td>10</td>
                                <td>30</td>
                                <td>36</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Standings
