
import express from 'express';

import userRoutes from '../routes/userRoutes';
import exerciseRoutes from '../routes/exerciseRoutes';
import mesocycleRoutes from '../routes/mesocycleRoutes';
import sessionFeedbackRoutes from '../routes/sessionFeedbackRoutes';
import settingsRoutes from '../routes/settingsRoutes';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Meso Builder API is running!');
});


app.use('/api/users', userRoutes);
app.use('/api/exercises', exerciseRoutes);
app.use('/api/mesocycles', mesocycleRoutes);
app.use('/api/feedback', sessionFeedbackRoutes);
app.use('/api/settings', settingsRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
