import Beca from "./becaModel.js";
import EncargadoBienestar from "./encargadoBienestarModel.js";
import Estudiante from "./estudianteModel.js";
import FichaSocioeconomica from "./fichaSocioeconomicaModel.js";
import Requisito from "./requisitoModel.js";
import SolicitudBeca from "./solicitudBecaModel.js";
import BecaRequisito from "./becaRequisitoAso.js";

//Un EncargadoBienestar tiene muchas Beca
EncargadoBienestar.hasMany(Beca, { foreignKey: "encargado_numero" });
Beca.belongsTo(EncargadoBienestar, { foreignKey: "encargado_numero" });

//Un EncargadoBienestar tiene muchas SolicitudBeca
Beca.hasOne(SolicitudBeca, { foreignKey: "solicitud_numero" });
SolicitudBeca.belongsTo(Beca, { foreignKey: "solicitud_numero" });

//Un Estudiante tiene muchas SolicitudBeca
Estudiante.hasMany(SolicitudBeca, { foreignKey: "estudiante_cedula" });
SolicitudBeca.belongsTo(Estudiante, { foreignKey: "estudiante_cedula" });

//Composición: Un Estudiante tiene una FichaSocioeconomica
Estudiante.hasOne(FichaSocioeconomica, {
  foreignKey: {
    name: "estudiante_cedula",
    allowNull: false,
  },
  onDelete: "CASCADE",
});

//Composición: Varias Becas tienen muchos Requisito
Beca.hasMany(BecaRequisito, { foreignKey: "beca_id" });
Requisito.hasMany(BecaRequisito, { foreignKey: "requisito_id" });
BecaRequisito.belongsTo(Beca, { foreignKey: "beca_id" });
BecaRequisito.belongsTo(Requisito, { foreignKey: "requisito_id" });

export {
  Beca,
  EncargadoBienestar,
  Estudiante,
  FichaSocioeconomica,
  Requisito,
  SolicitudBeca,
  BecaRequisito,
};
