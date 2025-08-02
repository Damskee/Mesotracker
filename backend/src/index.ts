
import express from 'express';
import userRoutes from '../routes/userRoutes';
import exerciseRoutes from '../routes/exerciseRoutes';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Meso Builder API is running!');
});

app.use('/api/users', userRoutes);
app.use('/api/exercises', exerciseRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
