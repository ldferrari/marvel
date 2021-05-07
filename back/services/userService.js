const { User } = require('../models');
const createTokenJWT = require('./createJWT');
const { passwordHash, matchPassword } = require('./passwordHash');

const passwordLength = 6;

const emailValido = (email) => {
  const regexMail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  return regexMail.test(String(email).toLowerCase());
};

const isEmailvalid = (email) => {
  if (!emailValido(email)) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'O campo e-mail deve ter o formato email@email.com',
    };
  }
};

const isPasswordFilled = (password) => {
  if (password === '' || !password) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'O campo "senha" é obrigatório',
    };
  }
};

const isPasswordValid = (password) => {
  if (String(password).length < passwordLength) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'A senha deve possuir 6 ou mais caracteres',
    };
  }
};

const getByEmail = async (email) => await User.findOne({
  where: { email },
});

const isUserRegistered = async (email) => {
  const user = await getByEmail(email);
  if (!user) {
    return {
      error: true,
      code: 'invalid_user',
      message: 'Usuário não cadastrado',
    };
  }
};

const isPasswordCorrect = async (email, password) => {
  const user = await getByEmail(email);
  const pass = user.dataValues.password; 
  const match = await matchPassword(password, pass);
  if (user && !match) {
    return {
      error: true,
      code: 'invalid_user',
      message: 'Senha incorreta',
    };
  }
};

const validateUserData = async (email, password) => {
  const user = await getByEmail(email);
  const passwordCorrect = await isPasswordCorrect(email, password);
  const emailValid = await isEmailvalid(email);
  const passwordFilled = await isPasswordFilled(password);
  const passwordValid = await isPasswordValid(password);
  const userRegistered = await isUserRegistered(email);
  if (passwordCorrect) return passwordCorrect;
  if (emailValid) return emailValid;
  if (passwordFilled) return passwordFilled;
  if (passwordValid) return passwordValid;
  if (userRegistered) return userRegistered;
  if (user) {
    user.dataValues.error = false;
  }

  return user.dataValues;
};

const validationUser = async (body) => {
  const { email, password } = body;
  const user = await validateUserData(email, password);
  const token = createTokenJWT(user);
  if (user.error) return user;
  return {
    token,
    id: user.id,
    name: user.name,
    email: user.email,
    message: 'Token gerado'
  };
};

const create = async (user) => {
  const { name, email, password } = user;
  const passwordH = await passwordHash(password)
  const validation = await getByEmail(email);
  if (validation) {
    return {
      error: true,
      code: 'conflict',
      message: 'E-mail already in database.',
    };
  }
  return User.create({ name, email, password: passwordH });
};

const update = async (id, name, email, password) => {
  const passwordH = await passwordHash(password)
  const userExists = await User.findOne({
    where: { id }
  });
  if (!userExists) {
    return {
      error: true,
      code: 'not_found',
      message: 'User not found',
    };
  }
  await User.update({ name, email, password: passwordH }, { where: { id }});
  return ({ id, name, email, message: 'success' });
};

module.exports = {
  validationUser,
  getByEmail,
  create,
  update,
};
