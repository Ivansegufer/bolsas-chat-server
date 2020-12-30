import app from './server';
import router from './router';
import cors from 'cors';
import corsOptions from './config/corsOptions';

app.use('/', router);
app.use(cors(corsOptions));

const PORT = app.get('port');

app
    .listen(
        PORT,
        () => console.log('Se ha iniciado el servidor en el puerto', PORT)
    );