export interface IUserBody {
    name: string,
    surname: string,
    nickname: string,
    email: string,
    password: string,
    birthday: Date,
}
export interface IUserLogin {
    username: string, 
    password: string
}