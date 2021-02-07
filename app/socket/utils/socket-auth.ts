import jwt from 'jsonwebtoken';
import { IJwtData, IJwtResult } from "../types/jwt";

const socket_auth = (socket: any) => {
    socket.auth = false;
    socket.on('authenticate', (data: any) => {
        try {
            const dataJwt = <IJwtData>data,
                result = <IJwtResult>jwt.verify(dataJwt.token, <string>process.env.KEY);
            if(result.username === data.username)
                socket.auth = true;
        } catch(err) {
            console.log('Socket authentication error by', socket.id);
        } finally {
            setTimeout(() => {
                if (!socket.auth) {
                  console.log("Disconnecting socket ", socket.id);
                  socket.disconnect('unauthorized');
                }
                else {
                    console.log(`${data.username} socket is now connected`, socket.id);
                }
            }, 1000);
        }
    });
}

export default socket_auth;