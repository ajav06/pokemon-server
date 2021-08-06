import { BatallaModel } from './model'

export const findLast5Batalla = async () => {
  try {
    return await BatallaModel.find()
      .populate('ganador')
      .populate('perdedor')
      .lean()
      .limit(5)
  } catch (error) {
    throw error
  }
}

export const addBatalla = async (value) => {
  try {
    const { participante, ganador, perdedor } = value

    const batalla = { participante, ganador, perdedor }

    return await BatallaModel.create(batalla)
  } catch (error) {
    throw error
  }
}
