import React, { useState } from 'react'
import axios from 'axios'
import SearchList from './SearchList'
import SearchBar from './SearchBar'
import './styles/listContainer.css'


export default function Search(props) {
    const [searchResults, setSearchResults] = useState()
    const [submitting, setSubmitting] = useState()
    const [input, setInput] = useState("")
    const [error, setError] = useState()
    const [lastSearch, setLastSearch] = useState("")
    
    
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
            }, 2000)
            const { data } = response
            if (data.Response === "False") {
                if (data.Error === "Too many results.") {
                    setError(data.Error + " Please narrow your search")
                } else {
                    setError(data.Error)
                }
            }
            setSearchResults(data.Search)
            setLastSearch(input)
        },
        (error) => {
            console.log(error)
        })
    }
    
    const handleInput = e => {
        setInput(() => (e.target.value))
    }
    
    return (
        <section className="listContainer">    
           <SearchBar
                handleInput={handleInput}
                input={input}
                handleSubmit={handleSubmit}
                submitting={submitting}
                error={error}
           />

            {searchResults && <div>
            <h4 className="listContainer__h4">Search results for "{lastSearch}"</h4>
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