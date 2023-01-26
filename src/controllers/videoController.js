const fakeUser = {
    username : "kim",
    loggedIn : true,
}

const videos = [
    {
        title: "First video",
        rating: 1,
        comments: 21,
        createdAt: "1 minutes ago",
        views: 11,
        id: 1,
    },
    {
        title: "Second video",
        rating: 2,
        comments: 22,
        createdAt: "2 minutes ago",
        views: 22,
        id: 2,
    },
    {
        title: "Third video",
        rating: 3,
        comments: 23,
        createdAt: "3 minutes ago",
        views: 33,
        id: 3,
    },
]


export const home = (req, res) => res.render("home",{pageTitle:"Home", fakeUser, videos});
export const watch = (req, res) =>{
    const {id} = req.params;
    const video = videos[id-1];
    res.render("watch",{pageTitle:"Watch Video", fakeUser, video});
    //  res.send(`Watch Video #${req.params.id}`);
};

export const getEdit = (req, res) => {
    const {id} = req.params;
    const video = videos[id-1];
    res.render("edit",{pageTitle:"Edit Video : "+videos[req.params.id-1].title, fakeUser, video});
};

export const postEdit = (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    videos[id-1].title = title;
    res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    res.render("upload",{pageTitle:"Upload Video", fakeUser});
};

export const postUpload = (req, res) => {
    const {title} = req.body;
    const newVideo = {
        title,
        rating: 0,
        comments: 0,
        createdAt: "Just now",
        views: 0,
        id: videos.length+1,
    };
    videos.push(newVideo);
    res.redirect("/");
}


export const remove = (req, res) => res.send("Delete Video");
export const search = (req, res) => res.send("Search Video");
