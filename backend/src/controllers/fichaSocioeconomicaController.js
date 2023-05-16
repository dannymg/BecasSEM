import FichaSocieconomica from "../models/fichaSocioeconomicaModel.js";

export const getAllFichaSocieconomicas = async (req, res) => {
  try {
    const fichas = await FichaSocieconomica.findAll();
    res.json(fichas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEstudianteFichaSocieconomica = async (req, res) => {
  try {
    const { estudiante_cedula } = req.params;
    const ficha = await FichaSocieconomica.findAll({
      where: {
        estudiante_cedula,
      },
    });
    res.json(ficha);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createFichaSocieconomica = async (req, res) => {
  const {
    id,
    descripcion,
    nro_familiares,
    ingreso_familiar,
    gastos_alimentacion,
    gastos_vivienda,
    gastos_educacion,
    observaciones,
    estudiante_cedula,
  } = req.body;
  try {
    const newFichaSocieconomica = await FichaSocieconomica.create({
      id,
      descripcion,
      nro_familiares,
      ingreso_familiar,
      gastos_alimentacion,
      gastos_vivienda,
      gastos_educacion,
      observaciones,
      estudiante_cedula,
    });
    res.json(newFichaSocieconomica);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateFichaSocieconomica = async (req, res) => {
  try {
    const { estudiante_cedula } = req.params;

    const ficha = await FichaSocieconomica.findAll({
      where: {
        estudiante_cedula,
      },
    });

    ficha.descripcion = descripcion;
    ficha.nro_familiares = nro_familiares;
    ficha.ingreso_familiar = ingreso_familiar;
    ficha.gastos_alimentacion = gastos_alimentacion;
    ficha.gastos_vivienda = gastos_vivienda;
    ficha.gastos_educacion = gastos_educacion;
    ficha.observaciones = observaciones;

    await ficha.save();
    res.json(ficha);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteFichaSocieconomica = async (req, res) => {
  try {
    const { estudiante_cedula } = req.params;

    await FichaSocieconomica.destroy({
      where: {
        estudiante_cedula,
      },
    });

    res.sendStatus("204");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
