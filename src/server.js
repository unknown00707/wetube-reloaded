import express from 'express';
import morgan from 'morgan';

const PORT = 4000;

const app = express();
const logger = morgan('dev');

const handleLGoHome = (req, res) => {
    return res.send('Homepage');
};

const handleLGoLogin = (req, res) => {
    return res.send('Login');
};

app.use(logger);
app.get('/', handleLGoHome);
app.get('/login', handleLGoLogin);

const handleListening = () => console.log(`Server listentin on port https://localhost:${PORT}`);

app.listen(PORT, handleListening);
