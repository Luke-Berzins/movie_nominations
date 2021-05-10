import React from 'react'
import SearchListItem from './SearchListItem'

export default function SearchList(props) {

    return props.searchResults.map((searchItem, index) => {
        
        return <SearchListItem 
                key={index}
                id={searchItem.imdbID}
                title={searchItem.Title}
                year={searchItem.Year}
                setNominationList={props.setNominationList}
                nominationList={props.nominationList}
        />
    })
}