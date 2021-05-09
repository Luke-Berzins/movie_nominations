import React, { useState } from 'react'

export default function SearchItem(props) {



    const handleNominate = (movieInfo) => {
        props.setNominationList({...props.nominationList, [props.id] : movieInfo})
    }

    
    return (
        <li>
            {props.title} ({props.year}) 
            {!(props.id in props.nominationList) && 
            Object.keys(props.nominationList).length < 5 && 
            <button onClick={() => handleNominate({ 
                "title" : props.title,
                "year" : props.year})}>
                Nominate!</button>}
        </li>

    )
}