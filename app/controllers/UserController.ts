import ConnectionDB from '../db/Connection';
import { IUserBody } from '../routes/interfaces/JsonBody';
import STATUS from '../utils/STATUS';

class UserController {
    private constructor() { }

    static addUser(user: IUserBody): number {
        const db = ConnectionDB.getInstance();
        const userModel = new db.models.User(user);        
        userModel.save((err) => {
            if(err) {
                return STATUS.ERROR_SERVIDOR;
            }
        });
        return STATUS.OK;
    }
}

export default UserController;