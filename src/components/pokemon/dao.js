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
    return await PokemonModel.find().limit(151)
  } catch (error) {
    throw error
  }
}

export const findPokemonById = async (id) => {
  try {
    return await PokemonModel.findById(id)
  } catch (error) {
    throw error
  }
}

export const addPokemon = async (value) => {
  try {
    const { numero, nombre, tipos, urlSprite, estadisticas } = value

    const pokemon = {
      _id: numero,
      numero,
      nombre,
      tipos,
      urlSprite,
      estadisticas
    }

    return await PokemonModel.create(pokemon)
  } catch (error) {
    throw error
  }
}

export const addVictoryPokemon = async (id) => {
  try {
    return await PokemonModel.findOneAndUpdate(
      { _id: id },
      { $inc: { cantidadVictorias: 1 } },
      { new: true }
    )
  } catch (error) {
    throw error
  }
}

export const addLostPokemon = async (id) => {
  try {
    return await PokemonModel.findOneAndUpdate(
      { _id: id },
      { $inc: { cantidadDerrotas: 1 } },
      { new: true }
    )
  } catch (error) {
    throw error
  }
}
