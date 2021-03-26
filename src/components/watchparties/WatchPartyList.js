import React, { useContext, useEffect, useHistory, useState } from "react"
import { WatchPartyContext } from "./WatchPartyProvider.js"
import { GameContext } from "../games/GameProvider.js"

export const WatchPartyList = () => {
    const { watchparties, getWatchParties, joinWatchParty, leaveWatchParty } = useContext(WatchPartyContext)
    const { games, getGames } = useContext(GameContext)

    const history = useHistory

    useEffect(() => {
        getWatchParties()
            .then(getGames)
    }, [])

    return (
        <article className="watchparties">
            <header className="watchparty__header" style={{ color: 'white' }}>
                <h2 style={{ color: 'white' }}>Watch Parties</h2>
            </header>
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            {
                watchparties.map(wp => {
                    return <section key={wp.id}
                        className="card text-white bg-primary mb-3" style={{ maxWidth: "40rem" }}>
                        <h4 className="watchparty__name">{wp.name}</h4>
                        <h5 className="watchparty__scheduled_time">Scheduled Time:&nbsp;&nbsp;&nbsp;{wp.scheduled_time}</h5>
                        <h5 className="watchparty__game">Game:&nbsp;&nbsp;&nbsp;{wp.game.name}</h5>
                        <h5 className="watchparty__location">Location:&nbsp;&nbsp;&nbsp;{wp.location}</h5>
                        <h5 className="watchparty__number_of_fans">Number of Fans:&nbsp;&nbsp;&nbsp;{wp.number_of_fans}</h5>
                        {
                            wp.joined
                                ? <button className="btn btn-secondary btn-lg"
                                    onClick={() => leaveWatchParty(wp.id)}

                                >Leave</button>
                                : <button className="btn btn-secondary btn-lg"
                                    onClick={() => joinWatchParty(wp.id)}
                                >Join</button>
                        }
                    </section>
                })
            }
        </article >
    )
}