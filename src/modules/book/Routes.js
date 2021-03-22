import { Router } from 'express';
import create from './create';
import search from './search';
import searchById from './searchById';
import deleteAll from './deleteAll';
import deleteById from './deleteById';
import update from './update';

const router = Router();

router.post('/', create); // method : POST / point: localhost: 5000/book/
router.post('/search', search); // method : POST / point: localhost: 5000/book/search
router.post('/:bookId', searchById); // method : POST / point: localhost: 5000/book/id 3123142133adad1
router.patch('/:bookId', update); // method : PATCH / point: localhost: 5000/user/id 3123142133adad1
router.delete('/', deleteAll); // method : DELETE / point: localhost: 5000/book/
router.delete('/:bookId', deleteById); // method : DELETE / point: localhost: 5000/book/bookId

export default router;
