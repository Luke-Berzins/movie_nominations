import React, { useState } from 'react'

export default function SearchItem(props) {
    const [nominated, setNominated] = useState(false)

    const handleNominate = (selected, movieInfo) => {
        if (Object.keys(props.nominationList).length < 5) {
            setNominated(!selected)
            props.setNominationList({...props.nominationList, ...movieInfo})
        }
    }


    return (
        <li>
            {props.title} ({props.year})
            {!nominated && <button onClick={() => handleNominate(nominated, { [props.title] : props.year})}>
                Nominate!</button>}
        </li>

    )
}