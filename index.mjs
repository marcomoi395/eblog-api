import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes/index.routes.mjs'

// Load environment variables from .env file
dotenv.config();

const app = express();

// Set Pug as the template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Configure body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes from the routes directory
routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});