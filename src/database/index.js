import 'dotenv/config'
import mongoose from 'mongoose';

const connectionURI = process.env.CONNECTION_URI

class Database {
    constructor() {
        this.connection = mongoose.connect(
            connectionURI
        ).then(() => console.log("Connected to Database"))
    }
}

export default new Database();