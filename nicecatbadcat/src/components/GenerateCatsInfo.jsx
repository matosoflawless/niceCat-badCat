import axios from 'axios'
import { useEffect, useState } from 'react'
import CatsCard from './CatsCard'
import Searchbar from './Searchbar'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


function GenerateCatsInfo() {
    //use state para guardar os dados que vem da funcão de request
    const [catsData, setCatsData] = useState([])
    const [initialCatsData, setInitialCatsData] = useState([])
    const [favouriteCats, setFavouriteCats] = useState([])

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // quando eu clickar no botão favorito, algo acontece, algo este que é chamar esta função. 
    //esta função vai ao meu array de catsData e puxa o elemento que o utilizador selecionar para a lista de gatos faforitos 
    //1a pergunta : como é que ele sabe qual o elemento que eu estou a selecionar?

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        color:"black",
        display:"flex",
        gap:"8px",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };



    const handleAddFavourite = (cat) => {
        if (favouriteCats.some((favCat)=>{
            return favCat.name === cat.name
        })) {
            setFavouriteCats(favouriteCats.filter(favCat => favCat.name !== cat.name))
        } else {
            setFavouriteCats([...favouriteCats, cat])
        }
    }
    console.log("gatos favoritos: ", favouriteCats)



    // "family_friendly", general_health", "playfulness", "children_friendly", "grooming", "intelligence", "other_pets_friendly"

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
            // console.log(response.data)

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

        const filteredCats = catsData.filter((cat) => {

            const searchInput = searchTerm.toLowerCase()
            const nameMatch = cat.name.toLowerCase().includes(searchInput)
            const originMatch = cat.origin.toLowerCase().includes(searchInput)

            return nameMatch || originMatch
        })

        setCatsData(filteredCats)


    }


    return (
        <>
            <Searchbar handleSearch={handleSearchCatsByNameAndOrigin} />
            <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
           {favouriteCats.map((favCat) => {
            return <CatsCard key={favCat.name} data={favCat} addToFavourite={handleAddFavourite}/>
           })}
          
         
        </Box>
      </Modal>
            
            {/* container que vai levar com as cartas dos gatinhos */}
            <Box display={"flex"} flexWrap={"wrap"} border={2} borderColor={'black'} alignItems={"center"} justifyContent={"space-around"} margin={5}>
                {catsData.map((cat, index) => {
                    return (
                        <CatsCard key={index} data={cat} addToFavourite={handleAddFavourite} />
                    )
                })}
            </Box>
        </>
    )
}


export default GenerateCatsInfo