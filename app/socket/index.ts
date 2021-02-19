import socket_auth from './utils/socketAuth';
import { io } from '../server';

const startSocketConnection = () => {
    io.on('connection', socket_auth);
}

export default startSocketConnection;