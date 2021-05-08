import React from 'react'
import './NominationList.css'


export default function NominationList(props) {
    


    return (
        Object.keys(props.nominationList).map(nominatedMovie => {
            return nominatedMovie
        })
    )
}