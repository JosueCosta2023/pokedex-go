import axios from "axios";

export async function getPokemons(){
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0`)
        return response.data.results
    } catch (error) {
        console.error("Erro ao buscar dados inicais do pokemon.", error)
    }
}

getPokemons()