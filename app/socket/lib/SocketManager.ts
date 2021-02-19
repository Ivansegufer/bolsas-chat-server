import { ISocket, ISocketDictionary } from "./ISocket";
import uniqid from "uniqid";
import socketHandler from "./socketHandler";

class SocketManager {
    private static sockets: ISocketDictionary;
    
    private constructor() { }

    static initSocket(socket: any, username: string) {
        socketHandler(socket);
        const socketBuilder: ISocket = {
            id: uniqid(),
            socket
        };
        this.addSocket(socketBuilder, username);
    }

    static killSocket(username: string) {
        this.removeSocket(username);
    }

    private static addSocket(socket: ISocket, username: string) {
        console.log(`The socket ${socket.id} has been added in the socket stack`);
        if(!this.sockets) {
            this.sockets = {
                [username]: socket
            }
        }
        this.sockets[username] = socket;
    }

    private static removeSocket(username: string) {
        const result = delete this.sockets[username];
        if(result) {
            console.log(`Has been removed the ${username}'s socket`);
        }
        else console.log('Failed trying to remove the socket');
    }
}

export default SocketManager;