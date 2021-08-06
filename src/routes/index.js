import { Router } from 'express'
import { pokemonRoute } from '@components/pokemon/routes'
import { batallaRoute } from '@components/batalla/routes'

const router = Router()

router.use('/pokemons', pokemonRoute)
router.use('/batallas', batallaRoute)

export default router
