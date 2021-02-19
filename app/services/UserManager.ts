import { compare, encrypt } from "../tools/encryptString";
import { IUserBody, IUserLogin } from "../lib/JsonUser";
import models_db from "../utils/models_db";
import { addOne, findOne } from "./dbManager";
import { generateJwt } from "../utils/jwt";
import { passwordIncorrect, userCreated } from "../utils/jsonResponse";

class UserManager {
    private constructor() { }

    static async loginUser(user: IUserLogin) {
        let result: any;

        const key = (user.email != "") 
            ? 'email' : 'nickname';

        result = <any>await findOne(models_db.USER, key, user[key]);

        if(!result.password) return result;

        const areEquals = await compare(user.password, result.password);

        if(areEquals) {
            const username = user.email
                ? user.email : user.nickname;

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
        const result = await addOne(models_db.USER, user);

        if(typeof result === 'boolean') return userCreated;

        return result;
    }
}

export default UserManager;