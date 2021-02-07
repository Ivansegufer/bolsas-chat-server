import socket_auth from './utils/socket-auth';
import { io } from '../server';

const initSocketManager = () => {
    io.on('connection', socket_auth);
}

export default initSocketManager;