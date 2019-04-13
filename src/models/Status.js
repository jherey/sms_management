import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const statusSchema = new Schema({
  status: {
    type: String,
    trim: true,
    enum: ['Sent', 'Received']
  },
  contact: {
    type: Schema.Types.ObjectId,
    ref: 'contact'
  },
  sms: {
    type: Schema.Types.ObjectId,
    ref: 'sms'
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Apply plugins to statusSchema.
statusSchema.plugin(mongoosePaginate);

const Status = mongoose.model('status', statusSchema);

export default Status;
