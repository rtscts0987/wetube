import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
    const {name, username, email, password, password2, location} = req.body;
    if(password !== password2){
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage: "Error : Password confirmation does not match.",
        });
    }
    const exists = await User.exists({ $or: [{username},{email}] });
    if (exists) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage: "Error : This username/email is already taken.",
        });
    }
    try {
        await User.create({
            name,
            username,
            email,
            password,
            location,
        });
        return res.redirect("/login");
    }
    catch (error) {
        return res.status(400).render("join", {
            pageTitle: "Join",
            errorMessage: "Error : " +  error._message,
        });
    }
}

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
export const postLogin = async (req, res) => {
    const {username, password} = req.body;
    const pageTitle = "Login";
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).render("login", {
            pageTitle,
            errorMessage: "Error : An account with this username does not exists.",
        });
    }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        return res.status(400).render("login", {
            pageTitle,
            errorMessage: "Error : Wrong password.",
        });
    }    
    res.redirect("/");

}

export const logout = (req, res) => res.send("logout User");
export const see = (req, res) => res.send("See User");
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Delete User");
