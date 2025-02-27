import validator from "validator";
import ExpressError from "./utilities/ExpressError.js";

const sanitizeCaseFile = (req, res, next) => {
  try {
    const caseFile = req.body;
    caseFile.firstName = validator.escape(req.body.firstName);
    caseFile.lastName = validator.escape(req.body.lastName);
    caseFile.contactPhone = validator.escape(req.body.contactPhone);
    caseFile.contactEmail = validator.normalizeEmail(req.body.contactEmail);
    caseFile.description = validator.escape(req.body.description);
    next();
  } catch (err) {
    throw new ExpressError(400, err);
  }
};

export { sanitizeCaseFile };
