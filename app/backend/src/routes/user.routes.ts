import express from 'express';
import UserController from '../controllers/user.controller';
import UserValidate from '../middleware/user.validate';
import AuthMiddleware from '../auth/auth';

const router = express.Router();

router.get('/:nome', /* AuthMiddleware.tokenHandle, */ UserController.selectUserByName);
router.get('/email/:email', UserController.findByemail);
router.get('/',/* AuthMiddleware.tokenHandle, */ UserController.listAllUsers);
router.post(
	'/',
	/* AuthMiddleware.tokenHandle, */
	UserValidate.createUserfieldValidate,
	UserValidate.checkIfUserAlreadyExists,
	UserValidate.checkIfEmailAlreadyExists,	
	UserController.addNewUser
);

router.put('/:nome',
	/* AuthMiddleware.tokenHandle, */
	UserValidate.createUserfieldValidate,
	UserValidate.checkIfUserExists,
	UserController.userUpdate);

router.delete('/:id', /* AuthMiddleware.tokenHandle */ UserController.deleteUser);


export default router;
