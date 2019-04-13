import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

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

// Apply plugins to contactSchema.
contactSchema.plugin(mongoosePaginate);

const Contact = mongoose.model('contact', contactSchema);

export default Contact;
