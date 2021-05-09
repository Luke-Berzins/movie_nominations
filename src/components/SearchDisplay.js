import React, { useState } from 'react'
import axios from 'axios'
import SearchList from './SearchList'
import SearchBar from './SearchBar'


export default function Search(props) {
    const [searchResults, setSearchResults] = useState()
    const [submitting, setSubmitting] = useState()
    const [input, setInput] = useState("")
    const [error, setError] = useState()
    
    
    const handleSubmit = e => {
        e.preventDefault()
        if (!input) {
            setError("Please enter your favourite movie!")
            return
        }
        setSubmitting(true)
        setError('')
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=f30d2ceb&s=${input}&type=movie&page=1`)
        .then((response) => {
            setTimeout(() => {
                setSubmitting(false)
            }, 1000)
            console.log("response", response.data)
            const { data } = response
            if (data.Response === "False") {
                if (data.Error === "Too many results.") {
                    setError(data.Error + " Please narrow your search")
                } else {
                    setError(data.Error)
                }
            }
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
        <section>    
           <SearchBar
                handleInput={handleInput}
                input={input}
                handleSubmit={handleSubmit}
                submitting={submitting}
                error={error}
           />

            {searchResults && <div>
            <h4>Search results for "{input}"</h4>
                <ul>
                <SearchList 
                searchResults={searchResults}
                setNominationList={props.setNominationList}
                nominationList={props.nominationList}
                />
                </ul>
            </div>}
        </section>
    )
}