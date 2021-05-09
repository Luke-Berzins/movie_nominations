import React from 'react'
import './NominationList.css'
import NominationListItem from './NominationListItem'

export default function NominationList(props) {
    


    return (
        Object.keys(props.nominationList).map((nominatedMovie, index) => {
            return <NominationListItem
                key={index}
                title={nominatedMovie}
                year={props.nominationList[nominatedMovie]}
                setNominationList={props.setNominationList}
                nominationList={props.nominationList}
            />
        })
    )
}