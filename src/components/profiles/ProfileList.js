import React, { useContext, useEffect } from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import { WatchPartyContext } from "../watchparties/WatchPartyProvider"


export const ProfileList = (props) => {
    const { watchparties, getWatchPartiesByUserId, deleteWatchParty } = useContext(WatchPartyContext)

    const history = useHistory()

    useEffect(() => {
        getWatchPartiesByUserId()
    }, [])
    console.log("params", useParams())

    return (
        <div>
            <h1>My Watch Parties</h1>
            {
                watchparties.map(wp => {
                    return <section key={wp.id} className="watchparty">
                        <div className="watchparty__name">{wp.name}</div>
                        <div className="watchparty__scheduled_time">{wp.scheduled_time}</div>
                        <div className="watchparty__game">{wp.game.name}</div>
                        <div className="watchparty__location">{wp.location}</div>
                        <div className="watchparty__number_of_fans">{wp.number_of_fans}</div>
                        <button className="edit__watchparty">
                            <Link
                                to={{
                                    pathname: `/watchparties/${wp.id}/edit`,
                                    state: { WatchParty: wp }
                                }}>
                                Edit </Link>
                        </button>




                        <button className="delete__watchparty"
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
            <h1>Joined Watch parties</h1>
            {/* {
                watchparties.map(wp => <Post key={wp.id} post={wp} props={props} />)
            } */}
        </div >
    )
}