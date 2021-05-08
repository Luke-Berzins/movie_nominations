import React, { useState } from 'react'


export default function Search(props) {
    const [submitting, setSubmitting] = useState(false)
    const [input, setInput] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault()
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
        }, 2000)
    }
    
    const handleInput = e => {
        console.log(e)
        setInput(() => (e.target.value))
    }
    
    return (
        <div>
            <div>
            {submitting && <div>...Submitting!</div>}
            <p>{input}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={input.title} onChange={handleInput} />
                <button>Search!</button>
            </form>
        </div>
    )
}