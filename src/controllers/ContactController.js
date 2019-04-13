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
      // destructure request body
      const { name, phoneNumber } = req.body;
      // change phone number to Number data type and assign to an options object
      const options = { name, phoneNumber: Number(phoneNumber) };
      const newContact = await BaseRepository.create(Contact, options);
      res.status(201).json({ newContact });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  /**
   *@description Get all contacts
   *@param  {Object} req - Request sent to the router
   *@param  {object} res - Response sent from the controller
   *@returns {object} - status code, message and the new contact created
   *@memberof ContactController
   */
  static async getAllContacts(req, res) {
    try {
      // set pagination parameters
      const { limit = 20, page = 1 } = req.query;
      const options = { limit: Number(limit), page };
      const contacts = await BaseRepository.findAll(Contact, {}, options);
      res.status(200).json({ contacts });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default ContactController;
