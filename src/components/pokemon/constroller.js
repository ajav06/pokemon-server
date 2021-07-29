import { message } from '@config/message'
import { handleError, handleResponse } from '@middleware/errorHandlers'
import { findPokemons } from './dao'
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
