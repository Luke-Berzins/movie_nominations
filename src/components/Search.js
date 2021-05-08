import React, { useState } from 'react'
import axios from 'axios'


export default function Search(props) {
    const [submitting, setSubmitting] = useState(false)
    const [input, setInput] = useState("")
    const [searchResults, setSearchResults] = useState({})
    
    
    const handleSubmit = e => {
        e.preventDefault()
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
        }, 2000)
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=f30d2ceb&t=hi`)
        .then((response) => {
            console.log(response.data)
            const { data } = response
            setSearchResults(data.Title)
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
            {searchResults && <div>{searchResults}</div>}
            <p>{input}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={input.title} onChange={handleInput} />
                <button>Search!</button>
            </form>
        </div>
    )
}