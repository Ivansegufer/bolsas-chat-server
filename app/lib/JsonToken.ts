export interface IJwtResult {
    username: string,
    date: string,
    iat: number,
    exp: number
}

export interface IJwtData {
    username: string,
    token: string
}