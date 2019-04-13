import { Router } from 'express';
import SmsController from '../controllers/SmsController';
import validContact from '../middlewares/validContact';
import verifyUserInputs from '../middlewares/verifyUserInputs';

const router = Router();

router.post('/:contactId',
  verifyUserInputs.createSmsRequestBody,
  validContact,
  SmsController.sendSms);

router.get('/',
  SmsController.getAllSms);

router.get('/sent/:contactId',
  validContact,
  SmsController.sentSms);

export default router;
