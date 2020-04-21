const db = require('_helpers/db');
const Post = db.Post;

module.exports = {
    getAll,
    getById,
    create,
};

async function getAll() {
    return await Post.find();
}

async function getById(id) {
    return await Post.findById(id);
}

async function create(postParams) {
    const post = new Post(postParams);

    // save user
    await post.save();
}
