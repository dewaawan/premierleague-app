import React, { Component } from 'react'
import HomeLive from "./HomeLive";
import HomeStandings from "./HomeStandings";
import MatchdayHome from "./MatchdayHome";
import HomePlayer from "./HomePlayer";
import HomePreview from "./HomePreview";
import Logo from "./Logo";
import "./style/tailwind.css"

export class Home extends Component {
    render() {
        return (
            <div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex flex-col gap-4">
                            <div>
                                <HomeLive />
                            </div>
                            <div>
                                <HomeStandings />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 col-span-2">
                            <div className="col-span-2">
                                <Logo />
                            </div>
                            <div>
                                <MatchdayHome />
                            </div>
                            <div>
                                <HomePlayer />
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <div>
                                <HomePreview />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home