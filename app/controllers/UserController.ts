import ConnectionDB from '../db/Connection';
import { IUserBody } from '../routes/interfaces/JsonBody';
import STATUS from '../utils/STATUS';

class UserController {
    private constructor() { }

    static addUser(user: IUserBody): number {
        const db = ConnectionDB.getInstance();
        const userModel = new db.models.User(user);
        let status: number = STATUS.OK;        
        userModel.save((err) => {
            if(err) {
                status = STATUS.ERROR_SERVIDOR;
            }
        });
        return status;
    }

    static async findUser(data: string, query: string) {
        const db = ConnectionDB.getInstance();
        let pass: string = '';
        return await new Promise<string>((resolve, reject) => {
            db.models.User.find({[query]: data}, (err, result) => {
                resolve(result[0].password);
            });
        });
    }
}

export default UserController;