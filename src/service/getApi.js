import axios from "axios";

export async function getPokemons() {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`)
        const promises = response.data.results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url)
            return res.data
        })

        return await Promise.all(promises)

    } catch (error) {
        console.error("Erro ao buscar dados inicais do pokemon.", error)
    }
}

export async function getPokemonsFullDetails(id) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemonDetail = response.data

        for (const ability of pokemonDetail.abilities) {
            const response = await axios.get(ability.ability.url)
            const abilityDescription = response.data.effect_entries.find(description => description.language.name === "en").effect
            ability.ability.description_ability = abilityDescription
        }

        return pokemonDetail

    } catch (error) {
        console.error("Erro ao buscar detalhes dos pokemons", error)
    }
}

export async function getTypesPokemons() {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/type')
        return response.data.results
    } catch (error) {
        console.error("Erro ao buscar os tipos de pokemons", error)
    }
}
