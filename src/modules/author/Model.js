import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Model = new Schema(
  {
    title: { type: String, required: true },
    book: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Book',
        required: false,
      },
    ],
  },
  { timestamps: {} },
);

export default mongoose.model('Author', Model);
