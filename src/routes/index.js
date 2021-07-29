import { Router } from 'express'
import { pokemonRoute } from '@components/pokemon/routes'

const router = Router()

router.use('/pokemons', pokemonRoute)

export default router
