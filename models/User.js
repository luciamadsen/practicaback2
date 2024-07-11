const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
    role: { type: String, default: 'user' },
    documents: [
        {
            name: { type: String },
            reference: { type: String }
        }
    ],
    last_connection: { type: Date }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
