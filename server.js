const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');

dotenv.config();

const app = express();

app.use(cors({
  origin: ['http://127.0.0.1:5502', 'http://localhost:5500'],
  methods: ['GET', 'POST', 'PUT'],
  credentials: false
}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`➡️ ${req.method} ${req.originalUrl}`);
  next();
});

require('./models/User');
require('./models/Partida');

app.use('/api/users', require('./routes/user.routes'));
app.use('/api/partidas', require('./routes/partida.routes'));

sequelize.sync()
  .then(() => console.log('✅ Base de datos MySQL conectada y tablas sincronizadas'))
  .catch(err => console.error('❌ Error al sincronizar la DB:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});
