import { DataTypes, Model } from 'sequelize';

class Fabricante extends Model {
  static initModel(sequelize) {
    Fabricante.init(
      {
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        documento_registro: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        país: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize, // Instância do Sequelize
        modelName: 'Fabricante',
        tableName: 'fabricantes',
        timestamps: true,
      }
    );

    // Associação com Medicamento
    Fabricante.hasMany(Medicamento, {
      foreignKey: 'fabricante_id',
      as: 'medicamentos',
    });
  }
}

export default Fabricante;