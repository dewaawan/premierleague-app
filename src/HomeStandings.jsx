import React from 'react'

function HomeStandings() {
    return (
        <div className="grid border rounded-md bg-white">
            <div className="font-bold text-sm p-5">
                Table
            </div>
            <div>
                <table className="pl-3 pr-3 border-t border-b border-separate border-gray-300 w-full">
                    <thead align="justify" className="text-gray-500">
                        <tr className="h-10">
                            <th className="w-1/2">Team</th>
                            <th className="w-1/6">P</th>
                            <th className="w-1/6">GD</th>
                            <th className="w-1/6"><span className="text-purple-700 bg-purple-300 rounded-sm p-1">Pts</span></th>
                        </tr>
                    </thead>
                    <tbody className="font-medium text-sm" align="justify">
                        <tr className="h-10">
                            <td>1 Tottenham</td>
                            <td>7</td>
                            <td>13</td>
                            <td className="text-purple-700 font-bold">21</td>
                        </tr>
                        <tr className="h-10">
                            <td>2 Liverpool</td>
                            <td>6</td>
                            <td>20</td>
                            <td className="text-purple-700 font-bold">20</td>
                        </tr>
                        <tr className="h-10">
                            <td>3 Manchester City</td>
                            <td>6</td>
                            <td>20</td>
                            <td className="text-purple-700 font-bold">17</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className=" font-normal text-lg text-gray-700 mt-3 ml-3 mb-3">
                <center>Full Table</center> 
            </div>
        </div>
    )
}

export default HomeStandings
