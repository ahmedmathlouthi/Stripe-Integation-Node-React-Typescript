const express = require('express');
const router = express.Router();
const postService = require('./post.service');

// routes
router.post('/add', create);
router.get('/all', getAll);
router.get('/:id', getById);

module.exports = router;


function create(req, res, next) {
    postService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    postService.getAll()
        .then(posts => res.json(posts))
        .catch(err => next(err));
}

function getById(req, res, next) {
    postService.getById(req.params.id)
        .then(post => post ? res.json(post) : res.sendStatus(404))
        .catch(err => next(err));
}
