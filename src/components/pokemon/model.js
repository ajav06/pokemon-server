import { model, Schema } from 'mongoose'

const PokemonSchema = new Schema({
  numero: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  tipos: [
    {
      type: String,
      trim: true,
      required: true
    }
  ],
  urlSprite: {
    type: String,
    trim: true
  },
  estadisticas: {
    hp: {
      type: Number,
      default: 0
    },
    ataque: {
      type: Number,
      default: 0
    },
    defensa: {
      type: Number,
      default: 0
    },
    velocidad: {
      type: Number,
      default: 0
    }
  },
  cantidadVictorias: {
    type: Number,
    default: 0
  },
  cantidadDerrotas: {
    type: Number,
    default: 0
  }
})

PokemonSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

export const PokemonModel = model('Pokemon', PokemonSchema)
