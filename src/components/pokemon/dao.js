import { PokemonModel } from './model'

const getSequenceNextValue = async (seqName) => {
  const seqDoc = PokemonModel.findOneAndUpdate(
    { _id: seqName },
    { $inc: { seqValue: 1 } },
    { new: true }
  )

  return seqDoc.seqValue
}

export const findPokemons = async () => {
  try {
    return await PokemonModel.find()
  } catch (error) {
    throw error
  }
}

export const addPokemon = async (value) => {
  try {
    const {
      numero,
      nombre,
      tipos,
      urlSprite,
      estadisticas,
      cantidadVictorias,
      cantidadDerrotas
    } = value

    const pokemon = {
      _id: numero,
      numero,
      nombre,
      tipos,
      urlSprite,
      estadisticas,
      cantidadVictorias,
      cantidadDerrotas
    }

    return await PokemonModel.create(pokemon)
  } catch (error) {
    throw error
  }
}
