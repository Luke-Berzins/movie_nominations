import React from 'react'
import NominationList from './NominationList'

export default function NominationDisplay(props) {



    return (
        <div>
            <h2>Nominations</h2>
            {Object.keys(props.nominationList).length === 5 && <div>Thank you for your selections!</div>}
            <NominationList 
                nominationList={props.nominationList}
                setNominationList={props.setNominationList}
            />
        </div>
    )
}