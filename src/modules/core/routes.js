import infoRoutes from '../info/Routes';
import userRoutes from '../user/Routes';
import baseRoutes from '../base/Routes';
import bookRoutes from '../book/Routes';
import authorRoutes from '../author/Routes';

export default function routes(app) {
  app.use('/info', infoRoutes);
  app.use('/user', userRoutes);
  app.use('/base', baseRoutes);
  app.use('/book', bookRoutes);
  app.use('/author', authorRoutes);
}
