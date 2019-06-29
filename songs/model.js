const Sequelize = require('sequelize')
const db = require('../db')
const Songs = db.define(
    'songs',
    {
        title: {
            type: Sequelize.STRING,
            field: 'song_title'
        },
        artist: {
            type: Sequelize.STRING,
            field: 'artist_name'
        },
        album: {
            type: Sequelize.STRING,
            field: 'album_title'
        }
    }, 
    { tableName: 'playlist_songs' })

module.exports = Songs