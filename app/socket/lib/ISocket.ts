export interface ISocket {
    id: string,
    socket: any
}

export interface ISocketDictionary {
    [username: string]: ISocket
}