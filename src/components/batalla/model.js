import { model, Schema } from 'mongoose'

const BatallaSchema = new Schema({
  participante: {
    type: String,
    trim: true,
    required: true
  },
  ganador: {
    type: Schema.Types.ObjectId,
    ref: 'Pokemon',
    required: true
  },
  perdedor: {
    type: Schema.Types.ObjectId,
    ref: 'Pokemon',
    required: true
  }
})

BatallaSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject()
  object.id = _id
  return object
})

export const BatallaModel = model('Batalla', BatallaSchema)
