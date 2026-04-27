const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
});

const Pelicula = sequelize.define('Pelicula', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    director: { type: DataTypes.STRING },
    anio: { type: DataTypes.INTEGER }
});

module.exports = { Pelicula, sequelize };
