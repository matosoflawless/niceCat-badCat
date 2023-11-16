/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import "./css/Searchbar.css"




function Searchbar(props) {

    const [inputValue, setInputValue] = useState("")

    //função para filtrar o nome
    //no parent(generateCatsinfo.jsx) o handleSearchByCat name vai ser igual ao inputValue
    const handleSearch = () => props.handleSearch(inputValue)


    return (
        <div className='searchBar-component'>
            <input type="text" onChange={(event) => setInputValue(event.target.value)} />
            <button className='btn btn-shadow btn-shadow--black' onClick={handleSearch}><span>SEARCH</span></button>
        </div>
    )
}

export default Searchbar