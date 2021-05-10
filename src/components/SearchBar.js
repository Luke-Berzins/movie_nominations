import React from 'react'
import "./styles/SearchBar.css"

export default function SearchBar(props) {

    return (
        <div>
            <div className="searchHeading">
            <h4 className="searchHeading__h4">Movie Title</h4>
            {props.submitting && <img alt="loading" src="./reel.svg" className="searchHeading__img--spinner"/>}
            </div>
            <div>
            {props.error && <p>{props.error}</p>}
            </div>
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