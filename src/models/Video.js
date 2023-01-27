import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true, maxLength: 80},
    description: {type: String, required: true, trim: true, minLength: 20}, 
    createdAt: { type: Date, default: Date.now, required: true},
    hashtags: [{ type: String}],
    meta: {
        views: { type: Number, default: 0, required: true},
        rating: { type: Number, default: 0, required: true},
    }
});

videoSchema.static('formatHashtags', function(hashtags){
    return hashtags.split(",").map(word => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);
export default Video;

// const video = {
//     title: "Video",
//     description: "Video",
//     createdAt: Date.now(),
//     hashtags: ["#video", "#youtube"],
//     meta: {
//         views: 0,
//         rating: 0
//     }
// }

// const VideoSchema = new mongoose.Schema({
//     fileUrl: {
//         type: String,
//         required: "File URL is required"
//     },
//     title: {
//         type: String,
//         required: "Title is required"
//     },
//     description: String,
//     views: {
//         type: Number,
//         default: 0
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });