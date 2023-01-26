export const see = (req, res) =>{
     res.send(`Watch Video #${req.params.id}`);
}
export const upload = (req, res) => res.send("Upload Video");
export const edit = (req, res) => res.send("Edit Video");
export const remove = (req, res) => res.send("Delete Video");
export const search = (req, res) => res.send("Search Video");
