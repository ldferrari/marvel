//bcrypt
const bcrypt = require('bcrypt');

const passwordHash = (password) => {
  const salt = bcrypt.genSaltSync(5);
  const newPassword = bcrypt.hashSync(password, salt);
  return newPassword;
};

const matchPassword = async (password, passwordH) => {
  const match = await bcrypt.compare(password, passwordH);
  return match
};

module.exports = {
  passwordHash,
  matchPassword
};
