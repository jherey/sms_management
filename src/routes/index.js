import { Router } from 'express';
import contactRoutes from './contact';

const app = Router();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to SMS Management Api!' });
});

app.use('/contacts', contactRoutes);

export default app;
