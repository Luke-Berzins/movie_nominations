import React from 'react'
import "./styles/SearchBar.css"

export default function SearchBar(props) {

    return (
        <div>
            <div className="searchHeading">
            <p>Movie Title</p>
            {props.submitting && <img alt="loading" src="./reel.svg" className="searchHeading__img--spinner"/>}
            </div>
            <div>
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