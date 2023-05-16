import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import SolicitudBeca from "./solicitudBecaModel.js";
import Requisito from "./requisitoModel.js";
import BecaRequisito from "./becaRequisitoAso.js";

const Beca = sequelize.define(
  "beca",
  {
    id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
    },
    descripcion: {
      type: DataTypes.STRING(100),
    },
    costo: {
      type: DataTypes.DOUBLE,
    },
    tipo: {
      type: DataTypes.STRING(25),
    },
    estado: {
      type: DataTypes.STRING(25),
    },
  },
  { timestamps: true }
);

//Una Beca tiene una SolicitudBeca
Beca.hasOne(SolicitudBeca, { foreignKey: "solicitud_numero" });
SolicitudBeca.belongsTo(Beca, { foreignKey: "solicitud_numero" });

//Composición: Varias Becas tienen muchos Requisito
Beca.hasMany(BecaRequisito, { foreignKey: "beca_id" });
Requisito.hasMany(BecaRequisito, { foreignKey: "requisito_id" });
BecaRequisito.belongsTo(Beca, { foreignKey: "beca_id" });
BecaRequisito.belongsTo(Requisito, { foreignKey: "requisito_id" });

export default Beca;
