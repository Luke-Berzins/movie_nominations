import React from 'react'
import SearchItem from './SearchItem'

export default function SearchList(props) {

    return props.searchResults.map((searchItem, index) => {
        
        return <SearchItem 
                key={index}
                id={searchItem.imdbID}
                title={searchItem.Title}
                year={searchItem.Year}
                setNominationList={props.setNominationList}
                nominationList={props.nominationList}
        />
    })
}