import React from 'react'

export default function SearchListItem(props) {

    const handleNominate = (movieInfo) => {
        props.setNominationList({...props.nominationList, [props.id] : movieInfo})
    }
   
    return (
        <li>
            {props.title} ({props.year}) 
            { 
            <button 
                type="button"
                aria-label="Nominate this movie"
                disabled={(props.id in props.nominationList) || 
                    Object.keys(props.nominationList).length === 5}
                onClick={() => handleNominate({ 
                    "title" : props.title,
                    "year" : props.year})}>
                Nominate!</button>}
        </li>
    )
}