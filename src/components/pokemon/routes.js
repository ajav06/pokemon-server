import { Router } from 'express'
import { listPokemons } from './constroller'

const router = Router()

router.get('/', listPokemons)

export const pokemonRoute = router
