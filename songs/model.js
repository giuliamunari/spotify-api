const Sequelize = require('sequelize')
const db = require('../db')
const Playlist = require('../playlists/model')
const Song = db.define(
    'songs',
    {
        title: {
            type: Sequelize.STRING,
            field: 'song_title',
            allowNull: false
        },
        artist: {
            type: Sequelize.STRING,
            field: 'artist_name',
            allowNull: false
        },
        album: {
            type: Sequelize.STRING,
            field: 'album_title',
            allowNull: false
        }
    }, 
    { timestamps: false, tableName: 'playlist_songs' })

module.exports = Song