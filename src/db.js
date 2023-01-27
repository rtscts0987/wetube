import mongoose from "mongoose";

mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

const handleError = error => console.log(`⛔ Error on DB Connection:${error}`);
const handleOpen = () => console.log("✅ Connected to DB");

db.on("error", handleError);
db.once("open", handleOpen);

export default db;