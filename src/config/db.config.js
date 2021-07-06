
import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log("MongoDB is Connected");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connect;