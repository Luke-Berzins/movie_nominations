import React, { useState } from 'react'


export default function Search(props) {
    const [submitting, setSubmitting] = useState(false)
    const [state, setState] = useState("hi")
    
    const handleSubmit = e => {
        e.preventDefault()
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
        }, 2000)
    }
    
    
    
    return (
        <div>
            <div>
            {submitting && <div>...Submitting!</div>}
            <p>{state}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input></input>
                <button>Search!</button>
            </form>
        </div>
    )
}