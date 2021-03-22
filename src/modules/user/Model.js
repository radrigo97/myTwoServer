import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userShema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false, required: true },
  name: { type: String, select: true, required: true },
});

userShema.index({ email: 3 }, { unique: true });

export default mongoose.model('User', userShema);
