import mongoose, { Connection } from 'mongoose';
import User from '../models/User';
import IModels from '../lib/Models';

class ConnectionDB {
    private _connection: Connection | null = null;
    private _connectionString: string;
    private _models: IModels;

    private static _connectionDB: ConnectionDB;

    public get connectionDB(): Connection | null {
        return this._connection;
    }

    public get models(): IModels {
        return this._models;
    }
    
    private constructor(){
        this._connectionString = <string>process.env.CONNECTION_STRING; 
        this._models = {
            User: new User().model
            //Here can put more models when we got them
        }
        this.open();
    }

    static getInstance(): ConnectionDB {
        if(!this._connectionDB) {
            this._connectionDB = new ConnectionDB();
        }
        return this._connectionDB;
    }

    private open() {
        mongoose.connect(this._connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(db => {
                console.log('Db is connected')
                this._connection = db.connection;
            })
            .catch(err => {
                console.error(err);
            });
    }
}

export default ConnectionDB;