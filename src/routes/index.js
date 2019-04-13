import { Router } from 'express';
import contactRoutes from './contact';
import smsRoutes from './sms';

const app = Router();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to SMS Management Api!' });
});

app.use('/contacts', contactRoutes);
app.use('/sms', smsRoutes);

export default app;
