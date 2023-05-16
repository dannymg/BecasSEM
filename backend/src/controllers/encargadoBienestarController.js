import EncargadoBienestar from "../models/encargadoBienestarModel.js";

export const getEncargadosBienestar = async (req, res) => {
  try {
    const encargados = await EncargadoBienestar.findAll();
    res.json(encargados);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const getEncargadoBienestarPorID = async (req, res) => {
  try {
    const encargado = await EncargadoBienestar.findByPk(
      req.params.numero_social
    );
    if (!encargado) {
      return res.status(404).json({ mensaje: "Encargado no encontrado" });
    }
    res.json(encargado);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const createEncargadoBienestar = async (req, res) => {
  try {
    const { numero_social, nombres, apellidos, cargo, sueldo } = req.body;
    const encargado = await EncargadoBienestar.create({
      numero_social,
      nombres,
      apellidos,
      cargo,
      sueldo,
    });
    res.json(encargado);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const updateEncargadoBienestar = async (req, res) => {
  try {
    const { numero_social } = req.params;
    const { nombres, apellidos, cargo, sueldo } = req.body;
    const encargado = await EncargadoBienestar.findByPk(numero_social);
    if (!encargado) {
      return res.status(404).json({ message: "Encargado no encontrado" });
    }
    encargado.nombres = nombres;
    encargado.apellidos = apellidos;
    encargado.cargo = cargo;
    encargado.sueldo = sueldo;

    await encargado.save();
    return res.json(encargado);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEncargadoBienestar = async (req, res) => {
  try {
    const { numero_social } = req.params;
    const encargado = await EncargadoBienestar.findByPk(numero_social);
    if (!encargado) {
      return res.status(404).json({ mensaje: "Encargado no encontrado" });
    }
    await encargado.destroy();
    res.json({ mensaje: "Encargado eliminado correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
