import Contact from '../models/Contact';
import BaseRepository from '../repositories/BaseRepository';

/**
 * @description Contacts endpoints
 * @class ContactController
 */
class ContactController {
  /**
   *@description Creates a new contact
   *@param  {Object} req - Request sent to the router
   *@param  {object} res - Response sent from the controller
   *@returns {object} - status code, message and the new contact created
   *@memberof ContactController
   */
  static async createContact(req, res) {
    try {
      const { name, phoneNumber } = req.body;
      const options = { name, phoneNumber: Number(phoneNumber) };
      const newContact = await BaseRepository.create(Contact, options);
      res.status(201).json({ newContact });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default ContactController;
