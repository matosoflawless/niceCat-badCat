import axios from 'axios'


const url = import.meta.env.VITE_APP_URL
const apiKey = import.meta.env.VITE_APP_API_KEY
    
//async await -> try catch function 
const catsDataRequest = async () => {
         try {
            const response = await axios({
                method: "GET",
                url: url,
                headers: { 
                    "X-Api-Key":apiKey,
                    "Content-Type":"application/json"
                }
            })

            // eu quero criar uma variavel para meter la uma funcao map para depois obter items por index
            const catsByIndex = response.data.map((cats,index) => {
                <p>
                <span>
                    {cats[index]}
                </span>
                </p>
})
return catsByIndex

            }
        catch (error) {
            console.log(error)
            
            }     
            
    }


function GenerateCatsInfo() {
        return (
            <div>
                <button onClick={catsDataRequest}>Get cats</button>
                <div>
                    {}
                </div>
            </div>
        )
    }


    export default GenerateCatsInfo