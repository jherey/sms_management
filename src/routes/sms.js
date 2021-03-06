import { Router } from 'express';
import SmsController from '../controllers/SmsController';
import validContact from '../middlewares/validContact';
import verifyUserInputs from '../middlewares/verifyUserInputs';
import verifyToken from '../middlewares/verifyToken';

const router = Router();

// middleware for authentication
router.use(verifyToken);

router.post('/:contactId',
  verifyUserInputs.createSmsRequestBody,
  validContact,
  SmsController.sendSms);

router.get('/',
  SmsController.getAllSms);

router.get('/sent/:contactId',
  validContact,
  SmsController.sentSms);

router.get('/received/:contactId',
  validContact,
  SmsController.receivedSms);

export default router;
