import Beca from "../models/becaModel.js";

//Obtener todas las becas
export const getBecas = async (req, res) => {
  try {
    const becas = await Beca.findAll();
    //200 = OK
    res.json(becas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

//Obtener una beca por su ID
export const getBecaPorID = async (req, res) => {
  try {
    const beca = await Beca.findByPk(req.params.id);
    if (!beca) {
      return res.status(404).json({ mensaje: "Beca no encontrada" });
    }
    //200 = OK
    res.json(beca);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

//Crear una beca
export const createBeca = async (req, res) => {
  try {
    const { id, nombre, descripcion, costo, tipo, estado } = req.body;
    const beca = await Beca.create({
      id,
      nombre,
      descripcion,
      costo,
      tipo,
      estado,
    });
    //201 = Created
    res.json(beca);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

//Actualizar una beca
export const updateBeca = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, costo, tipo, estado } = req.body;
    const beca = await Beca.findByPk(id);
    if (!beca) {
      return res.status(404).json({ message: "Beca no encontrada" });
    }
    beca.nombre = nombre;
    beca.descripcion = descripcion;
    beca.costo = costo;
    beca.tipo = tipo;
    beca.estado = estado;
    await beca.save();
    return res.json(beca);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar una beca
export const deleteBeca = async (req, res) => {
  try {
    const { id } = req.params;
    const beca = await Beca.findByPk(id);
    if (!beca) {
      return res.status(404).json({ mensaje: "Beca no encontrada" });
    }
    await beca.destroy();
    // 204 = No content
    res.json({ mensaje: "Beca eliminada correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
