import { compare, encrypt } from "../tools/encryptString";
import { IUserBody, IUserLogin } from "../lib/JsonUser";
import models_db from "../utils/models_db";
import { addOne, findOne } from "./dbManager";
import { generateJwt } from "../utils/jwt";
import { passwordIncorrect, userAlreadyExist, userCreated } from "../utils/jsonResponse";

class UserManager {
    private constructor() { }

    static async loginUser(user: IUserLogin) {
        const key = user.username.includes('@')
            ? 'email' : 'nickname';

        const result = <any>await findOne(models_db.USER, key, user.username);

        if(!result.password) return result;

        const areEquals = await compare(user.password, result.password);

        if(areEquals) {
            const username = user.username;
            const token = generateJwt({
                username,
                date: Date.now().toString()
            });
            return { username, token }
        }
        else return passwordIncorrect;
    }

    static async registerUser(user: IUserBody) {
        user.password = await encrypt(user.password);

        const result_email = <any>await findOne(models_db.USER, 'email', user.email);
        if(!result_email.email) {
            const result_nickname = <any>await findOne(models_db.USER, 'nickname', user.nickname); 
            if(!result_nickname.email) {
                const result = await addOne(models_db.USER, user);
                if(typeof result === 'boolean') return userCreated;
                return result;
            }
        }
        return userAlreadyExist;
    }
}

export default UserManager;