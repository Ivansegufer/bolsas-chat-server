import UserController from '../controllers/UserController';
import { encrypt } from '../tools/encryptString';
import STATUS from '../utils/STATUS';
import { RequestParam, ResponseParam } from '../utils/types/handlerTypes';
import { IUserBody } from './interfaces/JsonBody';

const register = (req: RequestParam, res: ResponseParam): void => {
    try {
        const user = <IUserBody>req.body;
        user.password = encrypt(user.password);
        const status = UserController.addUser(user);
        
        switch(status) {
            case STATUS.OK:
                res.status(status)
                    .json({
                        result: 'success'
                    });
                break;
            case STATUS.ERROR_SERVIDOR:
                res.status(status)
                    .json({
                        result: 'server error'
                    });
                break;
        }
    }
    catch(err) {
        console.error(err);
        res.status(STATUS.ERROR_CLIENTE)
            .json({
                result: 'client error'
            });
    }
    res.end();
}
export default register;