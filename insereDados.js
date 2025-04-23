import sequelize from './src/config/database.js';
import Fabricante from './src/models/Fabricante.js';
import Medicamento from './src/models/Medicamento.js';

(async () => {
  try {
    // Sincronizar o banco de dados
    // Recriar as tabelas no novo banco de dados
    await sequelize.sync({ force: true }); // Recria tabelas do zero
    console.log('Novo banco de dados criado!');

    await Fabricante.create({ nome: 'BeccaMed', documento_registro: '1111', país: 'Brasil' });
    await Fabricante.create({ nome: 'NeoGab', documento_registro: '2222', país: 'Brasil' });
    await Fabricante.create({ nome: 'GDP', documento_registro: '3333', país: 'Brasil' });
    await Fabricante.create({ nome: 'YasQuimica', documento_registro: '4444', país: 'Inglaterra' });
    await Fabricante.create({ nome: 'Enhypen', documento_registro: '5555', país: 'Coreia do Sul' });

    console.log('Fabricantes criados!');

    await Medicamento.create({ nome_comercial: 'Tylenol', princípio_ativo: 'Paracetamol', registro_anvisa: '123456', dosagem: '75mg', fabricante_id: 1 }); 
    await Medicamento.create({ nome_comercial: 'Alivium', princípio_ativo: 'Ibuprofeno', registro_anvisa: '78910', dosagem: '100mg', fabricante_id: 1 }); 
    await Medicamento.create({ nome_comercial: 'Atroveram', princípio_ativo: 'Brometo de ipratrópio', registro_anvisa: '11121314', dosagem: '0,250mg/mL', fabricante_id: 4 });
    await Medicamento.create({ nome_comercial: 'Mylanta Plus', princípio_ativo: 'Midroxido de Aluminio', registro_anvisa: '1234519', dosagem: '80mg/mL', fabricante_id: 2 });
    await Medicamento.create({ nome_comercial: 'Novalgina', princípio_ativo: 'Dipirona monoidratada', registro_anvisa: '08765273', dosagem: '500mg/mL', fabricante_id: 3 }); 


    console.log('Medicamentos criadas!');

  } catch (error) {
    console.error('Erro ao inserir registros:', error);
  }
})();