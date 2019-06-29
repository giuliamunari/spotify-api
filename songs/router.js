const Router = require('express')
const Song = require('./model')
const router = new Router()
const Playlist = require('../playlists/model');

router.post('/playlists/:id/songs', function (req, res) {
    const id = req.body.playlistId
    Playlist.findByPk(id)
        .then(playlist => {
            if (!playlist) return res.status(404).send({ message: 'Playlists Not Found' })
            return Song
                .create(req.body)
                .then(song => res.status(201).json({ song }))
                .catch(err => next(err))
        })
})

module.exports = router