import React, { useState } from 'react'

export default function SearchItem(props) {
    const [nominated, setNominated] = useState(false)

    const handleNominate = movie => {
        setNominated(!movie)
    }


    return (
        <div>
            {props.title} ({props.year})
            {!nominated && <button onClick={() => handleNominate(nominated)}>
                Nominate!</button>}
            {nominated && <div>hellya </div>}
        </div>

    )
}