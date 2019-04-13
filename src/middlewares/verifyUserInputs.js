import validationErrorHandler from '../helpers/validationErrorHandler';

const verifyUserInputs = {
  createContactRequestBody: (req, res, next) => {
    req.checkBody('name', 'Name is required').trim().notEmpty();
    req.checkBody('phoneNumber', 'Phonenumber is required').trim().notEmpty();
    req.checkBody('phoneNumber', 'Phonenumber must be digits').isNumeric();
    req.checkBody('phoneNumber', 'Phonenumber must be 13 digits').isLength({ min: 13, max: 13 });

    validationErrorHandler(req, res, next);
  }
};

export default verifyUserInputs;
