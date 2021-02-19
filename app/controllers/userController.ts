import { IUserBody, IUserLogin } from "../lib/JsonUser";
import UserManager from "../services/UserManager";
import { RequestParam, ResponseParam } from "../utils/handlerTypes";
import { badLogin, IJsonResponse } from "../utils/jsonResponse";
import STATUS from "../utils/status";

export const login = async (req: RequestParam, res: ResponseParam) => {
    let user: IUserLogin;

    try {
        user = <IUserLogin>req.body;
        const result = await UserManager.loginUser(user);

        if(result.username) {
            res.status(STATUS.OK)
                .json(result);
        }
        else {
            const response = <IJsonResponse>result;
            res.status(response.key)
                .json({ ...response, key: Date.now() });
        }
    } catch(error) {
        console.log('Error bad request');
        res.status(badLogin.key)
            .json({ ...badLogin, key: Date.now() });
    } finally { 
        res.end();
    }
}

export const register = async (req: RequestParam, res: ResponseParam) => {
    let user: IUserBody;

    try {
        user = <IUserBody>req.body;
        const result = await UserManager.registerUser(user);
        res.status(result.key)
            .json({ ...result, key: Date.now() });
    } catch(error) {
        console.log('Error bad request');
        res.status(badLogin.key)
            .json({ ...badLogin, key: Date.now() });
    } finally { 
        res.end();
    }
}