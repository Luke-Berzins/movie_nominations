import React, { useState } from 'react'




export default function Search(props) {
    const [state, setState] = useState("hi")
    
    
    
    return (
        <div>
            <form>
                <input></input>
                <button>Search!</button>
            </form>
        </div>
    )
}