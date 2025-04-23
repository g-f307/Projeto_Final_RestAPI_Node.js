import Fabricante from "../models/Fabricante.js";
import Medicamento from "../models/Medicamento.js";

export const listarMedicamentos = async (req, res) => {
    try {
        const medicamentos = await Medicamento.findAll({
            include: {
              model: Fabricante,
              as: 'fabricante',
            },
          });
  
      const response = medicamentos.map((medicamento) => ({
        id: medicamento.id,
        nome_comercial: medicamento.nome_comercial,
        princípio_ativo: medicamento.princípio_ativo,
        registro_anvisa: medicamento.registro_anvisa,
        dosagem: medicamento.dosagem,
        fabricante: medicamento.fabricante.nome,

      }));

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao listar medicamentos.' });
    }
};

export const criarMedicamento = async (req, res) => {
    try {
      const novoMedicamento = await Medicamento.create(req.body);

      res.status(201).json(novoMedicamento);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar medicamento.', detalhes: error.message });
    }
};

export const obterMedicamento = async (req, res) => {
    try {
        const medicamento = await Medicamento.findByPk(req.params.id,{
            include: {
              model: Fabricante,
              as: 'fabricante'
          }
          });
    
        if (!medicamento) {
          return res.status(404).json({ error: 'Medicamento não encontrado.' });
        }
    
        const response = {
            id: medicamento.id,
            nome_comercial: medicamento.nome_comercial,
            princípio_ativo: medicamento.princípio_ativo,
            registro_anvisa: medicamento.registro_anvisa,
            dosagem: medicamento.dosagem,
            fabricante: medicamento.fabricante.nome,
        };

        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao obter medicamento.', detalhes: error.message });
      }
};

export const deletarMedicamento = async (req, res) => {
    try {
        const medicamento = await Medicamento.findByPk(req.params.id);
    
        if (!medicamento) {
            return res.status(404).json({ error: 'Medicamento não encontrado.' });
        }

        await medicamento.destroy();
        res.status(204);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar medicamento.', detalhes: error.message });
    }
};