import mongoose, { Connection } from 'mongoose';

class ConnectionDB {
    private _connection: Connection | null = null;
    private _connectionString: string;

    private static _connectionDB: ConnectionDB;

    get connectionDB(): Connection | null {
        return this._connection;
    }
    
    static getInstance(): ConnectionDB {
        if(this._connectionDB) {
            return this._connectionDB;
        }
        return new ConnectionDB();
    }
    
    private constructor(){
        this._connectionString = <string>process.env.CONNECTION_STRING; 
        this.open();
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