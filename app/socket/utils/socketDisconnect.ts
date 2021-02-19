import SocketManager from "../lib/SocketManager"

const socket_disconnect = (username: string, socket: any) => {
    socket.disconnect();
    SocketManager.killSocket(username);
}

export default socket_disconnect;