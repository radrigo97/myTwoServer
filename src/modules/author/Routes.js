import { Router } from 'express';
import create from './create';
import search from './search';
import searchById from './searchById';
import deleteAll from './deleteAll';
import deleteById from './deleteById';
import update from './update';

const router = Router();

router.post('/', create); // method : POST / point: localhost: 5000/author/
router.post('/search', search); // method : POST / point: localhost: 5000/author/search
router.post('/:authorId', searchById); // method : POST / point: localhost: 5000/author/id 3123142133adad1
router.patch('/:authorId', update); // method : PATCH / point: localhost: 5000/user/id 3123142133adad1
router.delete('/', deleteAll); // method : DELETE / point: localhost: 5000/author/
router.delete('/:authorId', deleteById); // method : DELETE / point: localhost: 5000/author/authorId

export default router;
