import React, { Component } from 'react'
import axios from 'axios'

export class Standings extends Component {
    state = {
        table : []
    }

    componentDidMount(){
        axios.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2020-2021')
        .then(res => {
            const tabel = res.data.table.map(res => res)
            const peringkat = tabel.sort((a, b) => a.intRank - b.intRank)
            this.setState({ 
                table : peringkat
             });
        })
    }

    render() {
        const klasmen = this.state.table
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
                            {klasmen.map(res =>{
                            return(
                            <tr align="center" className=" h-12 border-t border-gray-300">
                                <td className="text-base font-bold text-gray-700">{res.intRank}</td>
                                <td align="left" className="text-base font-bold text-gray-700">{res.strTeam}</td>
                                <td align="left"><img className="h-7 w-7" src={res.strTeamBadge} alt="tottenham"/></td>
                                <td>{res.intPlayed}</td>
                                <td>{res.intWin}</td>
                                <td>{res.intDraw}</td>
                                <td>{res.intLoss}</td>
                                <td>{res.intGoalsFor}</td>
                                <td>{res.intGoalsAgainst}</td>
                                <td>{res.intGoalDifference}</td>
                                <td className="text-base text-purple-800 font-bold">{res.intPoints}</td>
                            </tr>
                                );
                            } ).sort((a, b) => a - b)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Standings
