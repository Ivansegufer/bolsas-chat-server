import mongoose from 'mongoose';

const connection = () => {
    const CONNECTION_STRING = <string>process.env.CONNECTION_STRING;
    mongoose.connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(db => {
            console.log('Db is connected to', db.connection.host);
        })
        .catch(err => {
            console.error(err);
        });
}

export default connection;