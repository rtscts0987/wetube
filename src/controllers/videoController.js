import Video from "../models/Video";


export const home = async (req, res) => {
    try {
        const videos = await Video.find({}).sort({createdAt: "desc"});
        res.render("home", {pageTitle: "Home", videos});
    }
    catch(error) {
        return res.render("error404",{message: error._message});
    }
};

export const watch = async (req, res) => {
    try {
        const {id} = req.params;
        const video = await Video.findById(id);
        if(!video){
            return res.render("error404",{message: "Video not found."});
        }
        return res.render("watch", {pageTitle: video.title, video});        
        //  res.send(`Watch Video #${req.params.id}`);
    }
    catch(error) {
        return res.render("error404",{message: error._message});
    }
};

export const getEdit = async (req, res) => {
    const {id} = req.params;
    const video = await Video.findById(id);
    if(!video){
        return res.render("error404",{message: "Video not found."});    
    }
    return res.render("edit",{pageTitle:"Edit : "+video.title, video});
};

export const postEdit = async (req, res) => {
    const {id} = req.params;
    const {title, description, hashtags} = req.body;
    const video = await Video.exists({_id:id});
    if(!video){
        return res.render("error404",{message: "Video not found."});
    }
    await Video.findByIdAndUpdate(id, {
        title,
        description,
        hashtags: Video.formatHashtags(hashtags),
        // hashtags: Video.formatHashtags(hashtags),
    });
    res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    res.render("upload",{pageTitle:"Upload Video"});
};

export const postUpload = async (req, res) => {
    try{
        const { title, description, hashtags } = req.body;
        const video = new Video({
            title,
            description,
            hashtags: Video.formatHashtags(hashtags),
        });
        // console.log(video);
        await video.save();
        // videos.push(newVideo); 
        res.redirect("/");
    }
    catch(error) {
        return res.render("error404",{message: error._message});
    }
}

export const remove = async (req, res) =>{
    const {id} = req.params;
    await Video.findByIdAndDelete(id);
    res.redirect(`/`);
}

export const search = async (req, res) => {
    const {keyword} = req.query;
    let videos = [];
    if(keyword){
        videos = await Video.find({
            title: {
              $regex: new RegExp(`${keyword}$`, "i"),
            },
          });
        return res.render("search",{pageTitle:"Search", videos});
    }    
    res.render("search",{pageTitle:"Search", videos});
}
