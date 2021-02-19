import cors from 'cors';
import { app, http, express} from './server';
import router from './router';
import corsOptions from './config/corsOptions';
import startSocketConnection from './socket/index';

app.use(express.json());
app.use('/', router);
app.use(cors(corsOptions));

const PORT = app.get('port');

(() => {
    http.listen(PORT, () => {
        console.log(`Server running in port: ${PORT}`);
    });
    startSocketConnection();
})();