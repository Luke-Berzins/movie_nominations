import React, { useState } from 'react'
import axios from 'axios'
import SearchList from './SearchList'


export default function Search(props) {
    const [submitting, setSubmitting] = useState(false)
    const [input, setInput] = useState("")
    const [searchResults, setSearchResults] = useState()
    const [error, setError] = useState()
    
    
    const handleSubmit = e => {
        e.preventDefault()
        if (!input) {
            setError("Please enter your favourite movie!")
            return
        }
        setSubmitting(true)
        setError('')
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=f30d2ceb&s=${input}&type=movie`)
        .then((response) => {
            setSubmitting(false)
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
            <div>
            {submitting && <div>...Submitting!</div>}
            {error && <div>{error}</div>}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={input.title} onChange={handleInput} />
                <button>Search!</button>
            </form>

            {searchResults && <div>
            <p>Search results for "{input}"</p>
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