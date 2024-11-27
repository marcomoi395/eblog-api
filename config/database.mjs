import mongoose from "mongoose"

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connect success");
    } catch (e) {
        console.log(e);
    }
}

export default connect;
