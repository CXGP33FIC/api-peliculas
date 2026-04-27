const express = require('express');
const { sequelize } = require('./modules/Pelicula');
const peliculaRoutes = require('./routes/peliculaRoutes');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json());
app.use(logger);

app.use('/peliculas', peliculaRoutes);

const PORT = 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`🚀 Servidor listo en http://localhost:${PORT}`));
});
