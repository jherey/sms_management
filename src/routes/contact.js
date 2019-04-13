import { Router } from 'express';
import ContactController from '../controllers/ContactController';
import verifyUserInputs from '../middlewares/verifyUserInputs';
import checkContactExists from '../middlewares/checkContactExists';

const router = Router();

router.post('/',
  verifyUserInputs.createContactRequestBody,
  checkContactExists,
  ContactController.createContact);

export default router;
