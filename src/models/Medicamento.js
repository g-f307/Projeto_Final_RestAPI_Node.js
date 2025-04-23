import { DataTypes, Model } from 'sequelize';
import Fabricante from './Fabricante.js';

class Medicamento extends Model {
  static initModel(sequelize) {
    Medicamento.init(
      {
        nome_comercial: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        princípio_ativo: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        registro_anvisa: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        dosagem: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fabricante_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Fabricante,
                key: 'id',
            }
          },
        
      },
      {
        sequelize, // Instância do Sequelize
        modelName: 'Medicamento',
        tableName: 'medicamentos',
        timestamps: true,
      }
    );

    // Associação com Fabricante
    Medicamento.belongsTo(Fabricante, {
      foreignKey: 'fabricante_id',
      as: 'fabricante',
    });
  }
}

export default Medicamento;