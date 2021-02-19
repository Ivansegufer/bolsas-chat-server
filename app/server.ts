import express from 'express';
import server  from 'http';
import { Server as SocketServer } from 'socket.io';

export { express };
export const app = express();
export const http = server.createServer(app);
export const io = new SocketServer(http);

app
    .set('port', process.env.PORT || 3300);