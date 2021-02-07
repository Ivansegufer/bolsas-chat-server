import cors from 'cors';
import { app, http} from './server';
import router from './router';
import corsOptions from './config/corsOptions';
import initSocketManager from './socket/socket-manager';

app.use('/', router);
app.use(cors(corsOptions));

const PORT = app.get('port');
initSocketManager();

http
    .listen(
        PORT,
        () => console.log('Se ha iniciado el servidor en el puerto', PORT)
    );