import React, { useContext, useEffect } from "react"
import { WatchPartyContext } from "../watchparties/WatchPartyProvider"


export const ProfileList = (props) => {
    const { watchparties, getWatchPartiesByUserId } = useContext(WatchPartyContext)



    useEffect(() => {
        getWatchPartiesByUserId()
    }, [])

    console.log("watch parties", watchparties)
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
                    </section>
                })
            }
            {/* <h1>Joined Watch parties</h1>
            {
                watchparties.map(wp => <Post key={wp.id} post={wp} props={props} />)
            } */}
        </div>
    )
}