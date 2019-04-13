import { Router } from 'express';
import ContactController from '../controllers/ContactController';
import verifyUserInputs from '../middlewares/verifyUserInputs';
import checkContactExists from '../middlewares/checkContactExists';
import validContact from '../middlewares/validContact';

const router = Router();

router.post('/',
  verifyUserInputs.createContactRequestBody,
  checkContactExists,
  ContactController.createContact);

router.get('/',
  ContactController.getAllContacts);

router.delete('/:contactId',
  validContact,
  ContactController.deleteContact);

export default router;
