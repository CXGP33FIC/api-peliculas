const { Pelicula } = require('../modules/Pelicula');

module.exports = {
    listar: () => Pelicula.findAll(),
    buscarPorId: (id) => Pelicula.findByPk(id),
    crear: (datos) => Pelicula.create(datos),
    actualizar: async (id, datos) => {
        const peli = await Pelicula.findByPk(id);
        return peli ? peli.update(datos) : null;
    },
    eliminar: async (id) => {
        const peli = await Pelicula.findByPk(id);
        return peli ? peli.destroy() : null;
    }
};
