import React, { useState } from 'react'
import axios from 'axios'
import SearchList from './SearchList'


export default function Search(props) {
    const [submitting, setSubmitting] = useState(false)
    const [input, setInput] = useState("")
    const [searchResults, setSearchResults] = useState()
    
    
    const handleSubmit = e => {
        e.preventDefault()
        setSubmitting(true)
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=f30d2ceb&s=${input}`)
        .then((response) => {
            console.log("response", response.data)
            const { data } = response
            setSubmitting(false)
            setSearchResults(data.Search)
            console.log(searchResults)
        },
        (error) => {
            console.log(error)
        })
    }
    
    const handleInput = e => {
        setInput(() => (e.target.value))
    }
    
    return (
        <div>
            <div>
            {submitting && <div>...Submitting!</div>}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={input.title} onChange={handleInput} />
                <button>Search!</button>
            </form>

            {searchResults && <div>
            <p>Search results for "{input}"</p>
                <SearchList 
                searchResults={searchResults}
                setNominationList={props.setNominationList}
                nominationList={props.nominationList}
                />
            
            
            </div>}
        </div>
    )
}