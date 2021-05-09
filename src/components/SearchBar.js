import React from 'react'


export default function SearchBar(props) {

    return (
        <div>
            <p>Movie Title</p>
            <div>
            {props.submitting && <img alt="loading" src="./reel.svg" />}
            {props.error && <p>{props.error}</p>}
            </div>
            <form onSubmit={props.handleSubmit}>
                <input 
                type="text" 
                name="title" 
                value={props.input.title} 
                onChange={props.handleInput} />
                <button
                type="submit"
                >Search!</button>
            </form>
        </div>
        )


}