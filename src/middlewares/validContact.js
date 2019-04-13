import BaseRepository from '../repositories/BaseRepository';
import Contact from '../models/Contact';

const validContact = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await BaseRepository.findById(Contact, contactId);
  if (!contact) return res.status(404).json({ error: 'Invalid Contact ID!' });
  req.contact = contact;
  next();
};

export default validContact;
