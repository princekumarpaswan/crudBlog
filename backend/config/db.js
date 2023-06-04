const mongoose = require("mongoose");



mongoose.set('strictQuery', false);

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log(`connected DB: localhost:4000`);
        })
        .catch((error) => {
            console.log(error.message);
            process.exit(1);
        })
}

module.exports = connect;