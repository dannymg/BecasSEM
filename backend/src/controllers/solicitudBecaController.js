import SolicitudBeca from "../models/solicitudBecaModel.js";

export const getSolicitudBecas = async (req, res) => {
  try {
    const solicitudes = await SolicitudBeca.findAll();
    res.json(solicitudes);
  } catch (error) {
    return res.status(500).json({ message: error.mesage });
  }
};

export const getSolicitudBeca = async (req, res) => {
  try {
    const { id } = req.params;
    const solicitud = await SolicitudBeca.findAll({
      where: {
        numero,
      },
    });

    if (!solicitud) {
      return res.status(404).json({ message: "No existe esa solicitud" });
    }
    res.json(solicitud);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSolicitudBeca = async (req, res) => {
  const { numero, fecha, motivo, tipo_postulacion } = req.body;
  try {
    const newSolicitudBeca = await SolicitudBeca.create({
      numero,
      fecha,
      motivo,
      tipo_postulacion,
    });
    res.json(newSolicitudBeca);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSolicitudBeca = async (req, res) => {
  try {
    const { numero } = req.params;
    const { fecha, motivo, tipo_postulacion } = req.body;

    const solicitud = await SolicitudBeca.findByPk(numero);
    solicitud.fecha = fecha;
    solicitud.motivo = motivo;
    solicitud.tipo_postulacion = tipo_postulacion;

    await solicitud.save();
    res.json(solicitud);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSolicitudBeca = async (req, res) => {
  try {
    const { numero } = req.params;

    await SolicitudBeca.destroy({
      where: {
        numero,
      },
    });

    res.sendStatus("204");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
