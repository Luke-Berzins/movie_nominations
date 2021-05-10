import React from 'react'
import "./styles/SearchBar.css"

export default function SearchBar(props) {

    return (
        <div> 
            <h4 className="listContainer__h4">Movie Title</h4>
                {props.submitting && <img alt="loading" src="./reel.svg" className="loading-image"/>}
                {props.error && <p>{props.error}</p>}
            <form onSubmit={props.handleSubmit}>
                <input 
                type="search"
                aria-label="search for movies to nominate"
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