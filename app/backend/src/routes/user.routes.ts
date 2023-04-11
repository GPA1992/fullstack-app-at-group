import express from 'express';
import UserController from '../controllers/user.controller';
import UserValidate from '../middleware/user.validate';
import AuthMiddleware from '../auth/auth';

const router = express.Router();

router.post(
    '/',
    UserValidate.createUserfieldValidate,
    UserController.addNewUser
);

export default router;
