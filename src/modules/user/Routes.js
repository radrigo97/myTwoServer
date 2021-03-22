import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGelAll';
import userGetById from './userGeById';
import userUpdateById from './userUpdateById';
import userDeleteAll from './userDeleteAll';
import userDeleteById from './userDeleteById';

const router = Router();

router.post('/', userRegister); // method : POST / point: localhost: 5000/user/
router.get('/', userGetAll); // method : GET / point: localhost: 5000/user/
router.get('/:userId', userGetById); // method : GET / point: localhost: 5000/user/id 3123142133adad1
router.patch('/:userId', userUpdateById); // method : PATCH / point: localhost: 5000/user/id 3123142133adad1
router.delete('/', userDeleteAll); // method : DELETE / point: localhost: 5000/user/
router.delete('/:userId', userDeleteById); // method : DELETE / point: localhost: 5000/user/userId

export default router;
