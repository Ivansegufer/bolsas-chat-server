import UserController from '../controllers/UserController';
import jwt from 'jsonwebtoken';
import { compare } from '../tools/encryptString';
import STATUS from '../utils/STATUS';
import { RequestParam, ResponseParam } from '../utils/types/handlerTypes';
import { IUserLogin } from './interfaces/JsonBody';
import ITokenData from './interfaces/TokenData';

const login = async (req: RequestParam, res: ResponseParam) => {
    const user = <IUserLogin>req.body;
    let password = await getUserPassword(user);
    const result = await compare(user.password, password);

    if(result) {
        const tokenData: ITokenData = {
            username: user.email ? user.email : user.nickname,
            date: Date.now().toString()
        }

        const token = jwt.sign(tokenData, <string>process.env.KEY, {
            expiresIn: 60 * 60 * 24 //Expira en 24 horas
        });

        res.end({
            username: tokenData.username,
            token: token
        });
    }
    else{
        res.status(STATUS.ERROR_CLIENTE).json({
            result: 'CLient error'
        });
    }
}

const getUserPassword = async (user: IUserLogin) => {
    if(user.email != "") {
        return await UserController.findUser(user.email, 'email');
    }
    else {
        return await UserController.findUser(user.nickname, 'nickname');
    }
}

export default login;