import React from 'react'
import SearchItem from './SearchItem'


export default function SearchList(props) {

    return props.searchResults.map((searchItem, index) => {
        console.log(searchItem)
        return <SearchItem 
                key={index}
                title={searchItem.Title}
                year={searchItem.Year}
        />
    })
}