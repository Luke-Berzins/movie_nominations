import React from 'react'
import './NominationList.css'
import NominationListItem from './NominationListItem'

export default function NominationList(props) {
    


    return (
        Object.keys(props.nominationList).map(nominatedMovie => {
            return <NominationListItem
                title={nominatedMovie}
                year={props.nominationList[nominatedMovie]}

            />
            
    
        })
    )
}