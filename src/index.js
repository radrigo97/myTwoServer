import home from './home';
import express from 'express';
import info from './info';
import errorHandler from './errorHandler';

const app = express();
const PORT = 5000;

app.get('/', home);
app.post('/info', info);
errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
