import React from 'react'

export default function NominationListItem(props) {
    
    console.log("props", props)
   
    const handleCancel = (cancelled) => {
        const {[cancelled] : value, ...newNominations} = props.nominationList
        console.log(newNominations)
        props.setNominationList(newNominations)
    }

    return (
        <li>
            {props.title} ({props.year})    
            <button onClick={
                () => handleCancel(props.id)}>
                Cancel
            </button>
        </li>
        
    )
}