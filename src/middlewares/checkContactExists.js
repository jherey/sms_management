import Contact from '../models/Contact';
import BaseRepository from '../repositories/BaseRepository';

const checkContactExists = async (req, res, next) => {
  const { phoneNumber } = req.body;
  // check contact db if phone number exists
  const contactExists = await BaseRepository.findByField(Contact, 'phoneNumber', phoneNumber);
  if (contactExists.length) return res.status(401).json({ error: 'PhoneNumber already exists!' });
  return next();
};

export default checkContactExists;
