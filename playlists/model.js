const Sequelize = require('sequelize')
const db = require('../db')
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

module.exports = Playlist