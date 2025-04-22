import express from 'express';
import FabricanteRoutes from './routes/FabricanteRoutes.js';
import MedicamentoRoutes from './routes/MedicamentoRoutes.js';
import sequelize from './config/database.js';

const app = express();

app.use(express.json());

app.use('/api/medicamentos', MedicamentoRoutes);
app.use('/api/fabricantes', FabricanteRoutes);

sequelize
    .sync()
    .then(() => console.log('Banco de dados sincronizado com sucesso.'))
    .catch((error) => console.error('Erro ao sincronizar o banco de dados: ', error));

export default app;