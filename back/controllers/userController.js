const { Router } = require('express');
const rescue = require('express-rescue');
const userService = require('../services/userService');

const userRouter = Router();

const successCode = 200;
const createdCode = 201;

userRouter.post('/login', rescue(async (req, res, next) => {
    const user = await userService.validationUser(req.body);
    if (user.error) {
      return next(user);
    }
    res.status(createdCode).json(user);
  }),
);

userRouter.post('/register', rescue(async (req, res, next) => {
  const user = await userService.create(req.body);
  if (user.error) {
    return next(user);
  }
  const { password, ...userWithoutPassword } = user.dataValues;
  res.status(createdCode).json(userWithoutPassword);
}));

userRouter.put('/profile/:id', rescue(async (req, res, next) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const response = await userService.update(id, name, email, password);
  if (response.error) {
    next(response);
  }
  return res.status(successCode).json(response);
}));

module.exports = userRouter;