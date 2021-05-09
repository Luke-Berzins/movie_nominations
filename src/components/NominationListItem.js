import React from 'react'

export default function NominationListItem(props) {
    


    const handleCancel = (cancelled) => {
        
    }

    return (
        <div>
            <div>
            <p>
            {props.title} ({props.year})
            </p>    
            <button onClick={() => handleCancel(props.title)}>Cancel</button>
            </div>
        </div>
    )
}