import React, { useState } from 'react'

export default function SearchItem(props) {
    const [nominated, setNominated] = useState(false)

    const handleNominate = (selected, movieInfo) => {
        setNominated(!selected)
        props.setNominationList({...props.nominationList, ...movieInfo})
    }


    return (
        <div>
            {props.title} ({props.year})
            {!nominated && <button onClick={() => handleNominate(nominated, { [props.title] : props.year})}>
                Nominate!</button>}
            {nominated && <div>hellya </div>}
        </div>

    )
}