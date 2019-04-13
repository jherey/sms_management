import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import jwt from 'jsonwebtoken';

const contactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  phoneNumber: {
    type: Number,
    trim: true,
    min: 13,
    unique: true,
    required: true
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

contactSchema.methods.generateToken = function generateToken(type, payload) {
  payload.type = type;
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRES_IN
  });
};

// Apply plugins to contactSchema.
contactSchema.plugin(mongoosePaginate);

const Contact = mongoose.model('contact', contactSchema);

export default Contact;
