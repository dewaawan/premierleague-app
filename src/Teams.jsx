import axios from 'axios'
import React, { Component } from 'react'

export class Teams extends Component {

    state = {
        team : []
    }

    componentDidMount(){
        axios.get("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
        .then(res => {
            this.setState({
                team : res.data.teams
            })
            console.log(this.state.team)
        })
    }

    render() {
        const team = this.state.team;
        return (
            <div>
                <div className="bg-gradient-to-r from-purple-700 to-purple-800 mx-0">
                    <p align="right" className=" text-5xl font-extrabold text-gray-50 p-20">Teams</p> 
                </div>
                <div className="container mx-auto grid grid-cols-5 gap-4 p-4 my-10 bg-white rounded-md">
                    {team.map(res => 
                    <div align="center" className="border rounded-sm border-blue-900 py-10">
                        <img className="h-16 w-16" src={res.strTeamBadge} alt={res.strTeam}/><span className="text-lg font-semibold">{res.strTeam}</span>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Teams
