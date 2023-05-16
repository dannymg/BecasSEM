import Requisito from "../models/requisitoModel.js";

export const getRequisitos = async (req, res) => {
  try {
    const requisitos = await Requisito.findAll();
    res.json(requisitos);
  } catch (error) {
    return res.status(500).json({ message: error.mesage });
  }
};

export const getRequisito = async (req, res) => {
  try {
    const { id } = req.params;
    const requisito = await Requisito.findAll({
      where: {
        id,
      },
    });

    if (!requisito) {
      return res.status(404).json({ message: "No existe ese requisito" });
    }
    res.json(requisito);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createRequisito = async (req, res) => {
  const { id, nombre, descripcion, tipo_requisito } = req.body;
  try {
    const newRequisito = await Requisito.create({
      id,
      nombre,
      descripcion,
      tipo_requisito,
    });
    res.json(newRequisito);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRequisito = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, tipo_requisito } = req.body;

    const requisito = await Requisito.findByPk(id);
    requisito.nombre = nombre;
    requisito.descripcion = descripcion;
    requisito.tipo_requisito = tipo_requisito;

    await requisito.save();
    res.json(requisito);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRequisito = async (req, res) => {
  try {
    const { id } = req.params;

    await Requisito.destroy({
      where: {
        id,
      },
    });

    res.sendStatus("204");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
