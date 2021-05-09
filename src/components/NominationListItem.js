import React from 'react'

export default function NominationListItem(props) {
    

   
    const handleCancel = (cancelled) => {
        const {[cancelled] : value, ...newNominations} = props.nominationList
        console.log(newNominations)
        props.setNominationList(newNominations)
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