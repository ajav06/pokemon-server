import { registerPokemon } from '@components/pokemon/constroller'
import fetch from 'node-fetch'

export const initBD = async () => {
  try {
    for (let id = 1; id < 889; id++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      await registerPokemon(response.json())
    }
  } catch (error) {
    console.log(error)
  }
}
