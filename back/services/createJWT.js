const jwt = require('jsonwebtoken');

const createTokenJWT = (userFound) => {
  const secret = 'marveldatasecret';
  const jwtConfig = {
    expiresIn: '1d', // tempo para o token inspirar
    algorithm: 'HS256', // algorítimo assimétrico
  };

  const { password: _, ...userWithoutPassword } = userFound;
  const payload = userWithoutPassword;
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

module.exports = createTokenJWT;
