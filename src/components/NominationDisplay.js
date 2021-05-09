import React from 'react'
import NominationList from './NominationList'

export default function NominationDisplay(props) {



    return (
        <section>
            <h4>Nominations</h4>
            <NominationList 
                nominationList={props.nominationList}
                setNominationList={props.setNominationList}
            />
        </section>
    )
}