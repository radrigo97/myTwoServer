import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Model = new Schema(
  {
    title: { type: String, required: true },
    author: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Author',
        required: false,
      },
    ],
  },
  { timestamps: {} },
);

export default mongoose.model('Book', Model);
