import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    loscation: String,
//     isAdmin: {
//         type: Boolean,
//         required: true,
//         default: false,
//     },
// }, {
//     timestamps: true,
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 5);
});


const User = mongoose.model("User", userSchema);

export default User;