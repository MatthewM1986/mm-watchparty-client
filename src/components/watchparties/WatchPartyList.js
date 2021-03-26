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
            <header className="watchparty__header">
                <h1>Watch Parties</h1>
            </header>
            {
                watchparties.map(wp => {
                    return <section key={wp.id} className="watchparty">
                        <div className="watchparty__name">Watch Party Name:{wp.name}</div>
                        <div className="watchparty__scheduled_time">Scheduled Time:{wp.scheduled_time}</div>
                        <div className="watchparty__game">Game to Watch:{wp.game.name}</div>
                        <div className="watchparty__location">Watch party Location:{wp.location}</div>
                        <div className="watchparty__number_of_fans">Number of Fans That Can Join:{wp.number_of_fans}</div>
                        {
                            wp.joined
                                ? <button className="btn btn-3"
                                    onClick={() => leaveWatchParty(wp.id)}

                                >Leave</button>
                                : <button className="btn btn-2"
                                    onClick={() => joinWatchParty(wp.id)}
                                >Join</button>
                        }
                    </section>
                })
            }
        </article >
    )
}