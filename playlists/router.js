const Router = require('express')
const Playlist = require('./model')
const Song = require('../songs/model');
const router = new Router()

router.post('/playlists', function (request, response, next) {
    if (!request.body.name) return response.status(400).send({ message: 'The name of the playlist needs to be defined' })
    return Playlist
        .create(request.body)
        .then(playlists => response.status(201).json({ playlists }))
        .catch(err => next(err))
})

router.get('/playlists', function (req, res) {
    Playlist.findAll()
        .then(playlists => {
            if (!playlists) return res.status(404).send({ message: 'Playlists Not Found' });
            return res.status(200).json({ playlists })
        })
        .catch(error => res.status(400).send(error))
})

router.get('/playlists/:id', function (req, res) { 
    const id = req.params.id
    Playlist.findByPk(id, { include: [Song] })
        .then(playlist => {
            console.log(playlist,'playlist')
            if (!playlist) return res.status(404).send({ message: 'Playlist Not Found' });
            return res.status(200).json({ playlist })
        })
        .catch(error => res.status(400).send(error))
})

router.delete('/playlists/:id', function (req, res) {
    const id = req.params.id
    Playlist
        .findByPk(id)
        .then(playlist => {
            if (!playlist) return res.status(400).send({ message: 'Playlist Not Found' })
            return playlist
                .destroy()
                .then(() => res.status(200).send({ message: 'Playlist deleted successfully.' }))
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
})

module.exports = router