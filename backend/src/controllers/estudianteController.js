import Estudiante from "../models/estudianteModel.js";

export const getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEstudiante = async (req, res) => {
  try {
    const { cedula } = req.params;
    const estudiante = await Estudiante.findAll({
      where: {
        cedula,
      },
    });

    if (!estudiante) {
      return res.status(404).json({ message: "No existe ese estudiante" });
    }
    res.json(estudiante);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEstudiante = async (req, res) => {
  const {
    cedula,
    nombres,
    apellidos,
    fecha_nacimiento,
    carrera,
    nivel_preparacion,
    numero_solicitud,
  } = req.body;
  try {
    const newEstudiante = await Estudiante.create({
      cedula,
      nombres,
      apellidos,
      fecha_nacimiento,
      carrera,
      nivel_preparacion,
      numero_solicitud,
    });
    res.json(newEstudiante);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEstudiante = async (req, res) => {
  try {
    const { cedula } = req.params;
    const {
      nombres,
      apellidos,
      fecha_nacimiento,
      carrera,
      nivel_preparacion,
      numero_solicitud,
    } = req.body;

    const estudiante = await Estudiante.findByPk(cedula);
    estudiante.nombres = nombres;
    estudiante.apellidos = apellidos;
    estudiante.fecha_nacimiento = fecha_nacimiento;
    estudiante.carrera = carrera;
    estudiante.nivel_preparacion = nivel_preparacion;
    estudiante.numero_solicitud = numero_solicitud;

    await estudiante.save();
    res.json(estudiante);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEstudiante = async (req, res) => {
  try {
    const { cedula } = req.params;

    await Estudiante.destroy({
      where: {
        cedula,
      },
    });

    res.sendStatus("204");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
