import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./log/logger.js"; 
import numRoute from "./router/number.routes.js"; 

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/classify-number', numRoute);


app.get('/', (req, res) => {E
  res.send('Number Properties API is running!');
});

// Start the server
const server = app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});