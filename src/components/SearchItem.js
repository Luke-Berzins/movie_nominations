import React, { useState } from 'react'

export default function SearchItem(props) {



    const handleNominate = (movieInfo) => {
        props.setNominationList({...props.nominationList, ...movieInfo})
    }

    
    return (
        <li>
            <p>{props.title} ({props.year})</p>
            {!(props.title in props.nominationList) && Object.keys(props.nominationList).length < 5 && <button onClick={() => handleNominate({ [props.title] : props.year})}>
                Nominate!</button>}
        </li>

    )
}