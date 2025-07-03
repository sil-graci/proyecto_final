import jwt from 'jsonwebtoken';

export const verifyJWT = (req, res, next) => {
  const auth = req.headers.authorization?.split(' ');
  if (!auth || auth[0] !== 'Bearer') return res.status(401).json({ message: 'No autorizado' });
  try {
    req.user = jwt.verify(auth[1], process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ message: 'Token inválido' });
  }
};
