import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import { WatchPartyContext } from "../watchparties/WatchPartyProvider"


export const ProfileList = (props) => {
    const { watchparties, getWatchPartiesByUserId, deleteWatchParty, joinWatchParty, leaveWatchParty, userJoinWatchParty, SetJoinedWatchParty, joinedwatchparty } = useContext(WatchPartyContext)

    const history = useHistory()

    useEffect(() => {
        getWatchPartiesByUserId()
            .then(userJoinWatchParty())
    }, [])

    return (
        <div>
            <h2 style={{ color: 'white' }}>My Watch Parties</h2>
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
                        <button className="btn btn-secondary btn-sm">
                            <Link className="btn btn-secondary btn-sm"
                                to={{
                                    pathname: `/watchparties/${wp.id}/edit`,
                                    state: { game: wp.game.id, edit: true, WatchParty: wp.id },

                                }}>
                                Edit </Link>
                        </button>
                        <button className="btn btn-secondary btn"
                            onClick={() => {
                                deleteWatchParty(wp.id)
                                    .then(() => {
                                        history.push("/")
                                    })
                            }}
                        >Delete</button>
                    </section>
                })
            }
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            <h2 style={{ color: 'white' }}>Joined Watch Parties</h2>
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
            {
                joinedwatchparty.map(wp => {
                    return <section key={wp.id}
                        className="card text-white bg-primary mb-3" style={{ maxWidth: "40rem" }}>
                        <h4 className="watchparty__name">{wp.name}</h4>
                        <h5 className="watchparty__scheduled_time">Scheduled Time:&nbsp;&nbsp;&nbsp;{wp.scheduled_time}</h5>
                        <h5 className="watchparty__game">Game:&nbsp;&nbsp;&nbsp;{wp.game.name}</h5>
                        <h5 className="watchparty__location">Location:&nbsp;&nbsp;&nbsp;{wp.location}</h5>
                        <h5 className="watchparty__number_of_fans">Number of Fans:&nbsp;&nbsp;&nbsp;{wp.number_of_fans}</h5>
                        {
                            wp.joined
                                ? <button className="btn btn-secondary"
                                    onClick={() => leaveWatchParty(wp.id)}
                                >Leave</button>
                                : <button className="btn btn-secondary"
                                    onClick={() => joinWatchParty(wp.id)}
                                >Join</button>
                        }
                    </section>
                })
            }
        </div >
    )
}