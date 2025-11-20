import express, { type Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT ?? 4000;

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
    ],
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/health', (_req, res) => {
  res.json({
    success: true,
    message: 'API is healthy!',
    timestamp: new Date().toISOString(),
  });
});

// Form submission endpoint
app.post('/submit-form', (req, res) => {
  console.log('Form submitted:', req.body);
  res.json({
    success: true,
    message: 'Form submitted successfully!',
    data: req.body,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🚀 Accepting requests from UI1, UI2, and UI3`);
});

export default app;
