import ConnectionDB from "../db/Connection"
import models_db from "../utils/models_db";
import { dbConnectionError, dbError, notFoundItem } from "../utils/jsonResponse";

const findOne = async (type: models_db, key: string, query: string) => {
    let db: ConnectionDB;

    try {
        db = ConnectionDB.getInstance();
    } catch(error) {
        return dbConnectionError;
    }

    return await new Promise((resolve, reject) => {
        db.models[type].find({ [key]: query }, (err, result) => {
            if(err) {
                reject(dbError);
            }
            resolve(result[0] ? result[0] : notFoundItem);
        });
    });
}

const addOne = async (type: models_db, data: object) => {
    let db: ConnectionDB;

    try {
        db = ConnectionDB.getInstance();
    } catch (error) {
        return dbConnectionError;
    }

    const model = new db.models[type](data);
    
    return await new Promise<boolean>((resolve, reject) => {
        const model = new db.models[type](data);

        model.save((error) => {
            if(error) {
                reject(false);
            }
            resolve(true);
        })
    });
}

export { findOne, addOne }