import React from 'react'

function HomeLive() {
    return (
        <div className="grid grid-rows-3 border border-white rounded-md bg-white h-56">
            <div className="grid grid-cols-2">
                <p className="m-2 w-56 leading-none"><span className="font-bold text-sm">Matchday 26</span><br/><span className="text-xs font-medium">White Hart Line Stadium</span></p>
                <div className="text-xs p-1 font-bold justify-self-end m-3 rounded-sm bg-red-100 text-red-700 w-12 h-6 text-center">Live</div>
            </div>
            <div className="grid grid-cols-3">
                <div className="ml-2 self-center leading-none font-bold text-sm"><center><img src="https://resources.premierleague.com/premierleague/badges/25/t6@x2.png" alt="tottenham"/><br/>Tottenham</center></div>
                <div className="justify-self-center font-bold text-3xl self-center ">2 : 0</div>
                <div className="mr-2 self-center leading-none font-bold text-sm"><center><img src="https://resources.premierleague.com/premierleague/badges/25/t43@x2.png" alt="mc"/><br/>Man. City</center></div>
            </div>
            <div className="grid grid-cols-1 border-t border-gray-300 mt-5">
                <div className="justify-self-center mt-3 font-semibold text-base">Matches Details</div>
            </div>
        </div>
    )
}

export default HomeLive
