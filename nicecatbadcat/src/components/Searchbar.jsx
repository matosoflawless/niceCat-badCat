/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'




function Searchbar(props) {

  const [inputValue, setInputValue] = useState("")

  //função para filtrar o nome
//no parent(generateCatsinfo.jsx) o handleSearchByCat name vai ser igual ao inputValue
const handleSearch = () => props.handleSearch(inputValue)









  return (
    <div>
      <input type="text" onChange={(event) => setInputValue(event.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Searchbar