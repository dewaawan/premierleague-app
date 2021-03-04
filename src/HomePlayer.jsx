import React from 'react'

function HomePlayer() {
    return (
        <div className="bg-white rounded-md flex flex-col">
            <div className="font-bold text-sm p-5">
                Top Scorer
            </div>
            <div className="flex flex-row bg-gradient-to-r from-purple-700 to-purple-800 border-t border-b border-gray-300 justify-between items-center pt-4 pl-4 pr-4">
                <div align="right" className="text-xl text-gray-100 font-bold">Son Heung Min<br/><span className="text-5xl">17</span></div>
                <div><img className="h-28" src="https://resources.premierleague.com/premierleague/photos/players/250x250/p85971.png" alt="son"/></div>
            </div>
            <div className="flex flex-row justify-between p-4  text-base font-semibold border-b border-gray-300">
                <div>Sterling</div>
                <div>16</div>
            </div>
            <div className="flex flex-row justify-between p-4  text-base font-semibold border-b border-gray-300">
                <div>Aguero</div>
                <div>16</div>
            </div>
            <div className="flex flex-row justify-between p-4  text-base font-semibold border-b border-gray-300">
                <div>B. Fernandes</div>
                <div>15</div>
            </div>
        </div>
    )
}

export default HomePlayer
