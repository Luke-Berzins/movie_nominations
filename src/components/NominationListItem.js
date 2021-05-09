import React from 'react'

export default function NominationListItem(props) {
    


    const handleCancel = (cancelled) => {
        
    }

    return (
        <li>
            <p>
            {props.title} ({props.year})
            </p>    
            <button onClick={() => handleCancel(props.title)}>Cancel</button>
        </li>
        
    )
}