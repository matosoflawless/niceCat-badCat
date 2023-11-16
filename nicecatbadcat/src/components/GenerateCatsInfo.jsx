import axios from 'axios'
import { useEffect, useState } from 'react'
import CatsCard from './CatsCard'
import Searchbar from './Searchbar'
import Modal from '@mui/material/Modal';

import "./css/GenerateCatsInfo.css"

function GenerateCatsInfo() {
    //use state para guardar os dados que vem da funcão de request
    const [catsData, setCatsData] = useState([])
    const [initialCatsData, setInitialCatsData] = useState([])
    const [favouriteCats, setFavouriteCats] = useState([])

    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const handleAddFavourite = (cat) => {
        //iterar sobre o array favouriteCats para ver se o gato que clickamos já existe usando o .some.
        //se for true ou seja existir um gato com o mesmo nome na lista dos favoritos, ele remove o gato que tenha o mesmo nome do que o que já lá esta
        //se não existir o gatinho mudamos o estado com os gatos que já lá estavam usando o spread e adicionando o novo gato.
        const hasCat = favouriteCats.some(favCat => favCat.name === cat.name)

        if (hasCat) {
            setFavouriteCats(favouriteCats.filter(favCat => favCat.name !== cat.name))
        } else {
            setFavouriteCats([...favouriteCats, cat])
        }
    }


    const url = import.meta.env.VITE_APP_URL
    const apiKey = import.meta.env.VITE_APP_API_KEY


    //uso de useEffect para poder renderizar tudo logo quando a pagina abre, por causa do assincronismo
    useEffect(() => {

        catsDataRequestFromApi()

    }, [])




    //async await -> try catch function 
    const catsDataRequestFromApi = async () => {
        try {
            const response = await axios({
                method: "GET",
                url: url,
                //aqui no headers meter a api key
                headers: {
                    "X-Api-Key": apiKey,
                    "Content-Type": "application/json"
                }
            })
            setCatsData(response.data)
            setInitialCatsData(response.data)

        }
        catch (error) {
            console.log(error)
        }
    }
    //logica para o searchbar cats by name and origin
    const handleSearchCatsByNameAndOrigin = (searchTerm) => {

        if (searchTerm === "") {
            setCatsData(initialCatsData)
            return
        }

        const filteredCats = initialCatsData.filter((cat) => {

            const searchInput = searchTerm.toLowerCase()
            const nameMatch = cat.name.toLowerCase().includes(searchInput)
            const originMatch = cat.origin.toLowerCase().includes(searchInput)

            return nameMatch || originMatch
        })
        setCatsData(filteredCats)
    }


    return (
        <div>

            <Searchbar handleSearch={handleSearchCatsByNameAndOrigin} />
            <div className='modal-opener'>
                <button className='btn btn-shadow btn-shadow--black' onClick={handleOpen}><span>FAVORITES</span></button>
            </div>
            <Modal sx={{ overflow: "auto" }} open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <div className='favorites-container'>
                    {favouriteCats.map((favCat) => {
                        return <CatsCard key={favCat.name} data={favCat} handleFavourite={handleAddFavourite} />
                    })}
                </div>
            </Modal>
            {/* container que vai levar com as cartas dos gatinhos */}
            <div className='cats-cards-container'>
                {catsData.map((cat, index) => {
                    return (
                        // mudar o nome do addToFavorite
                        <CatsCard key={index} data={cat} handleFavourite={handleAddFavourite} />)})}
            </div>

        </div>
    )
}


export default GenerateCatsInfo