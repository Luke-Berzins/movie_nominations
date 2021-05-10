import React from 'react'
import NominationListItem from './NominationListItem'

export default function NominationList(props) {
    
    return ( 
        <section>
            {Object.keys(props.nominationList).map((nominatedMovie, index) => {
                return <NominationListItem
                    key={index}
                    id={nominatedMovie}
                    title={props.nominationList[nominatedMovie].title}
                    year={props.nominationList[nominatedMovie].year}
                    setNominationList={props.setNominationList}
                    nominationList={props.nominationList}
                />
            }) }
        </section>
    )
}