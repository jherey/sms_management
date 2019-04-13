import mongoose, { Schema } from 'mongoose';

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

const Contact = mongoose.model('User', contactSchema);

export default Contact;
