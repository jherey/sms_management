import { Router } from 'express';
import SmsController from '../controllers/SmsController';
import validContact from '../middlewares/validContact';
import verifyUserInputs from '../middlewares/verifyUserInputs';

const router = Router();

router.post('/:contactId',
  verifyUserInputs.createSmsRequestBody,
  validContact,
  SmsController.sendSms);

export default router;
