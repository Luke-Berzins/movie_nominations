import React from 'react'

export default function SearchList(props) {

    return props.searchResults.map(searchItem => {

        return <div>
            {searchItem.Title} ({searchItem.Year})
            <button>Nominate!</button>
        </div>


    })
}