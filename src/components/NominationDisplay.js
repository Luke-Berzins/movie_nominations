import React from 'react'
import NominationList from './NominationList'
import './styles/listContainer.css'

export default function NominationDisplay(props) {



    return (
        <section className="listContainer">
            <h4 className="listContainer__h4"> Nominations</h4>
            <ul>
                <NominationList 
                    nominationList={props.nominationList}
                    setNominationList={props.setNominationList}
                />
            </ul>
        </section>
    )
}