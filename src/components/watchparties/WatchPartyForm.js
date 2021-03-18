import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { WatchPartyContext } from "./WatchPartyProvider.js"


export const WatchPartyForm = () => {
    const history = useHistory()
    const { createWatchParty, getWatchParties } = useContext(WatchPartyContext)
    const [watchparty, setWatchParty] = useState({})

    useEffect(() => {
        getWatchParties()
            .then(getGames)
    }, [])

    // const changeEventState = (domEvent) => {
    //     // ...
    // }

    const createNewWatchParty = () => {
        createWatchParty({
            user_id: parseInt(localStorage.getItem("Token")),
            name: name.current.value,
            scheduled_time: scheduled_time.current.value,
            game: game.name,
            location: location.current.value,
            number_of_fans: number_of_fans.current.value,
        })
            .then((watchparty) => {
                props.history.push(`/watchparties`)

            })
    }
}

return (
    <form className="watchpartyForm">
        <h2 className="watchpartyForm__title">Create Watch Party</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="gameId">Game: </label>
                <select name="gameId" className="form-control"
                    value={currentEvent.gameId}
                    onChange={changeEventState}>
                    <option value="0">Select a game...</option>
                    {
                        games.map(game => (
                            <option></option>
                        ))
                    }
                </select>
            </div>
        </fieldset>

        {/* Create the rest of the input fields */}

        <button type="create"
            onClick={evt => {
                evt.preventDefault() // Prevent browser from submitting the form
                createNewWatchParty()
            }}
        ></button>
    </form >
)