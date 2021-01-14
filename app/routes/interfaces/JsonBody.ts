export interface IUserBody {
    name: string,
    surname: string,
    nickname: string,
    email: string,
    password: string,
    birthday: Date,
}
export interface IUserLogin {
    email: string,
    nickname: string,
    password: string
}