export const see = (req, res) =>{
    res.render("watch",{pageTitle:"Watch Video"});
    //  res.send(`Watch Video #${req.params.id}`);
}
export const upload = (req, res) => res.send("Upload Video");
export const edit = (req, res) => res.render("edit",{pageTitle:"Edit Video"});
export const remove = (req, res) => res.send("Delete Video");
export const search = (req, res) => res.send("Search Video");
