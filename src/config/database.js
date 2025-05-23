import { Sequelize } from "sequelize";
import Fabricante from '../models/Fabricante.js';
import Medicamento from '../models/Medicamento.js';


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false,
});

Fabricante.initModel(sequelize);
Medicamento.initModel(sequelize);

export default sequelize;