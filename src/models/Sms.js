import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const smsSchema = new Schema({
  receiver: {
    type: String,
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Apply plugins to smsSchema.
smsSchema.plugin(mongoosePaginate);

const Sms = mongoose.model('sms', smsSchema);

export default Sms;
