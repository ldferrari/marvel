const unauthorizedDataCode = 401;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(unauthorizedDataCode).json({ message: 'Token não encontrado' });
  }
  next();
};
