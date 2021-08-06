import { Router } from 'express'
import { getPokemon, listPokemons } from './constroller'

const router = Router()

router.get('/', listPokemons)
router.get('/:id', getPokemon)

export const pokemonRoute = router
