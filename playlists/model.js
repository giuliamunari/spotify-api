const {Sequelize} = require('sequelize')
const db = require('../db')
const Song = require('../songs/model')
const Playlist = db.define(
    'playlist',
    {
        name: {
            type: Sequelize.STRING,
            field: 'playlist_name',
            allowNull: false
        },
    }, 
    { timestamps: false, tableName: 'user_playlists' })

Playlist.hasMany(Song, {as: 'songs', foreignKey: 'playlistId' })
module.exports = Playlist