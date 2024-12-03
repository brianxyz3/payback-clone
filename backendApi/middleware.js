import validator from "validator";
import ExpressError from "./utilities/ExpressError.js";

const sanitizeUser = (req, res, next) => {
  try {
    const user = req.body;
    user.firstName = validator.escape(req.body.firstName);
    user.lastName = validator.escape(req.body.lastName);
    user.contactPhone = validator.escape(req.body.contactPhone);
    user.contactEmail = validator.normalizeEmail(req.body.contactEmail);
    user.lostAmount = validator.escape(req.body.lostAmount);
    user.description = validator.escape(req.body.description);
    next();
  } catch (err) {
    throw new ExpressError(400, err);
  }
};

export default sanitizeUser;
