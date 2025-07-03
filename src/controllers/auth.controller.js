import { login } from '../services/auth.service.js';

export const loginCtrl = (req, res, next) => {
  try {
    const token = login(req.body);
    res.json({ token });
  } catch (e) {
    next(e);
  }
};
