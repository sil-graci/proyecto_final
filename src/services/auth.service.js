import jwt from 'jsonwebtoken';
const users = [{ username: 'admin', password: 'secret' }];

export const login = ({ username, password }) => {
  const u = users.find(u => u.username === username && u.password === password);
  if (!u) throw { status: 401, message: 'Credenciales inválidas' };
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};
