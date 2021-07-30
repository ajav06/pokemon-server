import { message } from '@config/message'
import { handleError, handleResponse } from '@middleware/errorHandlers'
import { addPokemon, findPokemons } from './dao'
import { pokemonsResource } from './dto'

// /v1/pokemons/
export const listPokemons = async (req, res) => {
  try {
    const data = await findPokemons()

    handleResponse(res, 200, message.accepted, pokemonsResource(data))
  } catch (error) {
    handleError(error, res)
  }
}

export const registerPokemon = async (data) => {
  try {
    const { id, name, stats, types, sprites } = await data

    const pokemon = {
      numero: id,
      nombre: name,
      tipos: Array.from(types, (type) => type.type.name),
      urlSprite: sprites.back_default,
      estadisticas: {
        hp: stats[0].base_stat,
        ataque: stats[1].base_stat,
        defensa: stats[2].base_stat,
        velocidad: stats[5].base_stat
      }
    }

    return await addPokemon(pokemon)
  } catch (error) {
    throw error
  }
}
