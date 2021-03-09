import React, { Component, Fragment } from 'react'
import axios from 'axios'

export class Test extends Component {

    state ={
        table : []
    }

    componentDidMount(){
        axios.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2020-2021')
        .then(res =>{ 
            console.log(res.data.table)
            this.setState({
                table : res.data.table
            })
        })
    }

    render() {
        const klasmen = this.state.table
        return (
            <div>
                {klasmen.map(res => {
                    return(
                        <div>
                            {res.strTeam} {res.intRank}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Test
