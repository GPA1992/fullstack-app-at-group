import express from 'express';
import UserController from '../controllers/user.controller';
import UserValidate from '../middleware/user.validate';
/* import AuthMiddleware from '../auth/auth'; */

const router = express.Router();

router.get(	'/:nome', UserController.selectUser );
router.post(
	'/',
	UserValidate.createUserfieldValidate,
	UserValidate.createUserValidate,
	UserController.addNewUser
);



export default router;
