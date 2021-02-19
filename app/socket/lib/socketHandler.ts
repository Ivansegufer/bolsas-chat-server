import socket_disconnect from "../utils/socketDisconnect";

const socketHandler = (socket: any) => {
    socket.on('disconnect_socket', (username: string) => socket_disconnect(username, socket));
}

export default socketHandler;