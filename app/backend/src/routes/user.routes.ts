import express from 'express';
import UserController from '../controllers/user.controller';
import UserValidate from '../middleware/user.validate';
/* import AuthMiddleware from '../auth/auth'; */

const router = express.Router();

router.post(
	'/',
	UserValidate.createUserfieldValidate,
	UserValidate.createUserValidate,
	UserController.addNewUser
);

router.put('/:nome',
	UserValidate.createUserfieldValidate,
	UserValidate.checkIfUserExists,
	UserController.userUpdate);

router.get('/:nome', UserController.selectUserByName);
router.get('/', UserController.listAllUsers);
router.delete('/:id', UserController.deleteUser);

export default router;
