import React from 'react'

export default function NominationListItem(props) {
    
   
    const handleCancel = (cancelled) => {
        const {[cancelled] : value, ...newNominations} = props.nominationList
        props.setNominationList(newNominations)
    }

    return (
        <li>
            {props.title} ({props.year})    
            <button 
                type="button"
                aria-label="Un-nominate this movie"
                onClick={() => handleCancel(props.id)}>
                Cancel
            </button>
        </li>
        
    )
}