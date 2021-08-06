import { pokemonResource } from '@components/pokemon/dto'

export const batallaResource = (resource) => ({
  participante: resource.participante,
  ganador: pokemonResource(resource.ganador),
  perdedor: pokemonResource(resource.perdedor)
})

export const batallasResource = (resources) =>
  Array.from(resources, (resource) => batallaResource(resource))
