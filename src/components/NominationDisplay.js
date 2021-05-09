import React from 'react'
import NominationList from './NominationList'

export default function NominationDisplay(props) {



    return (
        <section>
            <h4>Nominations</h4>
            {Object.keys(props.nominationList).length === 5 && 
            <p>Thank you for your selections!</p>}
            <NominationList 
                nominationList={props.nominationList}
                setNominationList={props.setNominationList}
            />
        </section>
    )
}