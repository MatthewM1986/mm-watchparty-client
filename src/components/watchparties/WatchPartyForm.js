import React, { useContext, useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import { WatchPartyContext } from "./WatchPartyProvider.js"
import { GameContext } from "../games/GameProvider.js"


export const WatchPartyForm = (props) => {

    console.log("props", props)

    const [editWatchParty, SetWatchParty] = useState()

    const { createWatchParty, watchparty, setWatchParty, getWatchParty } = useContext(WatchPartyContext)
    const { games, getGames } = useContext(GameContext)

    const name = useRef(null)
    const time = useRef(null)
    const location = useRef(null)
    const fans = useRef(null)

    useEffect(() => {
        getGames()
            .then(getWatchParty)
    }, [])

    // useEffect(() => {
    //     getWatchParty(parseInt(props.match.params))
    // }, [])

    const handleInputChange = (event) => {
        const newWatchParty = Object.assign({}, watchparty)
        newWatchParty[event.target.name] = event.target.value
        setWatchParty(newWatchParty)
    }

    const history = useHistory()

    const editMode = props.match.params.hasOwnProperty("id")
    console.log("edit mode", editMode)

    const game = games.find(g => g.id === history.gameId) || {}

    const createNewWatchParty = () => {
        if (editMode) {

            const editWatchParty = {
                id: parseInt(history.watchPartyId),
                user_id: parseInt(localStorage.getItem("Token")),
                name: name.current.value,
                scheduled_time: time.current.value,
                game: game.name,
                location: location.current.value,
                number_of_fans: fans.current.value,
            }
            editWatchParty(editWatchParty).then(history.push("/"))
        } else {
            createWatchParty({
                user_id: parseInt(localStorage.getItem("Token")),
                name: name.current.value,
                scheduled_time: time.current.value,
                game: game.name,
                location: location.current.value,
                number_of_fans: fans.current.value,
            })
                .then(() => {
                    history.push(`/`)
                })
        }
    }

    return (
        <form className="watchpartyForm">
            <h2 className="watchpartyForm__title">Watch Party</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" ref={name}
                        required autoFocus className="form-control" placeholder="Name"
                        proptype="varchar"
                        defaultValue={watchparty.name}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Scheduled Time: </label>
                    <input type="text" id="time" ref={time}
                        required autoFocus className="form-control" placeholder="Time"
                        proptype="varchar"
                        defaultValue={watchparty.scheduled_time}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location: </label>
                    <input type="text" id="location" ref={location}
                        required autoFocus className="form-control" placeholder="Location"
                        proptype="varchar"
                        defaultValue={watchparty.location}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fans">Max Fans Allowed: </label>
                    <input type="text" id="fans" ref={fans}
                        required autoFocus className="form-control" placeholder="Max Fans"
                        proptype="varchar"
                        defaultValue={watchparty.number_of_fans}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    createNewWatchParty()
                }}
            >Submit
                {editMode ? "Save Updates" : "Make Post"}
            </button>
        </form >
    )
}