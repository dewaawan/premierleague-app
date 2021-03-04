import React from 'react'

function HomePreview() {
    return (
        <div className="relative">
            <img className="rounded-md" src="https://resources.premierleague.com/photos/2021/03/02/98b95fba-3333-4700-8384-32f66f74e148/Harry-Kane.jpg?width=500&height=333" alt="tottenham"/>
            <div className="absolute rounded-md rounded-t-none bottom-0 left-0 bg-gradient-to-r from-purple-700 to-purple-800 w-full">
                <p align="center" className="m-0.5 text-base font-semibold text-gray-100">Spurs beat Burnley: 4-0</p>
            </div>
        </div>
    )
}

export default HomePreview
