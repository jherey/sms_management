import Contact from '../models/Contact';
import Sms from '../models/Sms';
import Status from '../models/Status';
import BaseRepository from '../repositories/BaseRepository';

/**
 * @description Sms endpoints
 * @class SmsController
 */
class SmsController {
  /**
   *@description Sends a sms
   *@param  {Object} req - Request sent to the router
   *@param  {object} res - Response sent from the controller
   *@returns {object} - status code, message and the newly sent sms
   *@memberof SmsController
   */
  static async sendSms(req, res) {
    try {
      // destructure request body
      const { phoneNumber, message } = req.body;
      // find receiver by phone number
      const receiver = await BaseRepository.findByField(Contact, 'phoneNumber', phoneNumber);
      if (!receiver.length) res.status(404).json({ error: 'Receiver phone number not found!' });
      if (req.contact.phoneNumber === receiver[0].phoneNumber) {
        return res.status(400).json({ error: 'You can\'t send message to yourself!' });
      }
      const options = { receiver: phoneNumber, sender: req.contact.phoneNumber, message };
      // create sms
      const sms = await BaseRepository.create(Sms, options);
      const statusReceiverOptions = { status: 'Received', sms: sms._id, contact: receiver[0]._id };
      const statusSenderOptions = { status: 'Sent', sms: sms._id, contact: req.contact._id };
      // create status for sender and receiver
      await BaseRepository.create(Status, statusReceiverOptions);
      await BaseRepository.create(Status, statusSenderOptions);
      res.status(200).json({ message: 'Sms sent!', sms });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default SmsController;
