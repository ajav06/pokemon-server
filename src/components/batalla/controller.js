import {
  addLostPokemon,
  addVictoryPokemon,
  findPokemonById
} from '@components/pokemon/dao'
import { message } from '@config/message'
import { handleError, handleResponse } from '@middleware/errorHandlers'
import { addBatalla, findLast5Batalla } from './dao'
import { batallaResource, batallasResource } from './dto'

// /v1/batallas/
export const listBatallas = async (req, res) => {
  try {
    const data = await findLast5Batalla()

    handleResponse(res, 200, message.accepted, batallasResource(data))
  } catch (error) {
    handleError(error, res)
  }
}

// /v1/batallas/
export const registerBatalla = async (req, res) => {
  try {
    const { pokemon1, pokemon2, participante } = req.body

    const win = Math.floor(Math.random() * 2 + 1)

    let batalla
    let data

    if (win === 1) {
      batalla = {
        participante,
        ganador: await findPokemonById(pokemon1),
        perdedor: await findPokemonById(pokemon2)
      }
      data = await addBatalla(batalla)

      await addVictoryPokemon(pokemon1)
      await addLostPokemon(pokemon2)
    } else {
      batalla = {
        participante,
        ganador: await findPokemonById(pokemon2),
        perdedor: await findPokemonById(pokemon1)
      }
      data = await addBatalla(batalla)

      await addVictoryPokemon(pokemon2)
      await addLostPokemon(pokemon1)
    }

    handleResponse(res, 200, message.create_success, batallaResource(data))
  } catch (error) {
    handleError(error, res)
  }
}
