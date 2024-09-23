import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favoriteCities: { type: [String], default: [] },
});

const User = mongoose.model('User', userSchema);
export default User; // Ensure you're exporting the User model as default
