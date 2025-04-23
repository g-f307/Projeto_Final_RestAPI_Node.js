import Fabricante from '../models/Fabricante.js';
import Medicamento from '../models/Medicamento.js';

export const listarFabricantes = async (req, res) => {
    try {
      const fabricantes = await Fabricante.findAll();
  
      const response = fabricantes.map((fabricante) => ({
        id: fabricante.id,
        nome: fabricante.nome,
        documento_registro: fabricante.documento_registro,
        país: fabricante.país,
      }));

      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Erro ao listar fabricantes.' });
    }
};

export const criarFabricante = async (req, res) => {
    try {
      const novoFabricante = await Fabricante.create(req.body);

      res.status(201).json(novoFabricante);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar fabricante.', detalhes: error.message });
    }
};

export const obterFabricante = async (req, res) => {
    try {

        const fabricante = await Fabricante.findByPk(req.params.id);
    
        if (!fabricante) {
          return res.status(404).json({ error: 'Fabricante não encontrado.' });
        }
    
        const response = {
            id: fabricante.id,
            nome: fabricante.nome,
            documento_registro: fabricante.documento_registro,
            país: fabricante.país,
        };

        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao obter fabricante.', detalhes: error.message });
      }
};

export const deletarFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);
    
        if (!fabricante) {
            return res.status(404).json({ error: 'Fabricante não encontrado.' });
        }

        const medicamentosAssociados = await Medicamento.findOne({
            where: { fabricante_id: fabricante.id }
        });
        
        if (medicamentosAssociados) {
            return res.status(400).json({
                error: 'Não é possível deletar o fabricante, pois existem medicamentos associados a ele.'
            });
        }

        await estado.destroy();
        res.status(204);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar fabricante.', detalhes: error.message });
    }
};