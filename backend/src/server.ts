import express from 'express';
import authRoutes from './routes/auth.js';
import ridesRoutes from './routes/rides.js';
import reservationsRoutes from './routes/reservations.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/rides", ridesRoutes);
app.use("/reservations", reservationsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});