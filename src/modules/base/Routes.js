import { Router } from 'express';
import create from './create';
import search from './search';
import searchById from './searchById';
import deleteAll from './deleteAll';
import deleteById from './deleteById';
import update from './update';

const router = Router();

router.post('/', create); // method : POST / point: localhost: 5000/base/
router.post('/search', search); // method : POST / point: localhost: 5000/base/search
router.post('/:baseId', searchById); // method : POST / point: localhost: 5000/base/id 3123142133adad1
router.patch('/:baseId', update); // method : PATCH / point: localhost: 5000/user/id 3123142133adad1
router.delete('/', deleteAll); // method : DELETE / point: localhost: 5000/base/
router.delete('/:baseId', deleteById); // method : DELETE / point: localhost: 5000/base/baseId

export default router;
