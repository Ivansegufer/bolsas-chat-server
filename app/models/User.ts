import { Document, model, Model, Schema } from 'mongoose';

interface IUser extends Document {
    name: string; 
    surname: string; 
    nickname: string;
    email: string;
    password: string;
    birthday: Date;
}

export interface UserModel extends Model<IUser> {};

export default class User {
    private _model: Model<IUser>;

    public get model(): Model<IUser> {
        return this._model;
    }

    constructor() {
        const schema = new Schema({
            name: { type: String, required: true },
            surname: { type: String, required: true },
            nickname: { type: String, required: true },
            email: { type: String, required: false },
            password: { type: String, required: true },
            birthday: { type: Date, required: false },
            creation_date: { type: Date, default: Date.now }
        });

        this._model = model<IUser>('User', schema);
    }
}