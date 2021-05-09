import React from 'react'
import NominationList from './NominationList'

export default function NominationDisplay(props) {



    return (
        <div>
            <h2>Nominations</h2>
            <NominationList 
                nominationList={props.nominationList}
                setNominationList={props.setNominationList}
            />
        </div>
    )
}