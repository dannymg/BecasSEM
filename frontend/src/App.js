import { axiosInstance } from "./utils/axiosInstance";
import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("welcome");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="app">
      <div className="topBar">
        <div className="menu">
          <button
            className={activePage === "welcome" ? "active" : ""}
            onClick={() => handlePageChange("welcome")}
          >
            Inicio
          </button>
          <button
            className={activePage === "estudiantes" ? "active" : ""}
            onClick={() => handlePageChange("estudiantes")}
          >
            Estudiantes
          </button>
          <button
            className={activePage === "solicitudes" ? "active" : ""}
            onClick={() => handlePageChange("solicitudes")}
          >
            Solicitudes de Beca
          </button>
        </div>
      </div>

      <div className="content">
        {activePage === "welcome" && <WelcomePage />}
        {activePage === "estudiantes" && <EstudiantesPage />}
        {activePage === "solicitudes" && <SolicitudesPage />}
      </div>

      <div className="bottomBar">
        <p className="copyRightText">© 2023 - Todos los derechos reservados</p>
      </div>
    </div>
  );
};

const WelcomePage = () => {
  return (
    <div className="page welcomePage">
      <h1 className="welcomeTitle">Sistema de Becas</h1>
      <p className="welcomeContent">Gestione las becas de la institución</p>
    </div>
  );
};

const EstudiantesPage = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEstudiante, setNewEstudiante] = useState({
    cedula: "",
    nombres: "",
    apellidos: "",
    fecha_nacimiento: "",
    carrera: "",
    nivel_preparacion: "",
  });

  useEffect(() => {
    getEstudiantes();
  }, []);

  const getEstudiantes = async () => {
    try {
      const response = await axiosInstance.get("/estudiante");
      setEstudiantes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = (event) => {
    setNewEstudiante({
      ...newEstudiante,
      [event.target.name]: event.target.value,
    });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleCrearEstudiante = async () => {
    try {
      const response = await axiosInstance.post("/estudiante", newEstudiante);
      console.log("Estudiante guardado:", response.data);
      handleCloseForm();
      await getEstudiantes();
    } catch (error) {
      alert(error);
    }
  };

  const handleEditarEstudiante = async (id) => {
    try {
      const nuevoEstudiante = {
        cedula: "32432532",
        nombres: "Manuel",
        apellidos: "Lopez",
        fecha_nacimiento: "1990-01-01",
        carrera: "Ingeniería",
        nivel_preparacion: "Universitario",
        numero_solicitud: "ABC123",
      };

      await axiosInstance.put(`/estudiante/${id}`, nuevoEstudiante);
      await getEstudiantes();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEliminarEstudiante = async (id) => {
    try {
      await axiosInstance.delete(`/estudiante/${id}`);
      await getEstudiantes();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="page">
      <h1>Estudiantes</h1>
      <table>
        <thead>
          <tr>
            <th>Cédula</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Fecha de Nacimiento</th>
            <th>Carrera</th>
            <th>Nivel de Preparación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante) => (
            <tr key={estudiante.cedula}>
              <td>{estudiante.cedula}</td>
              <td>{estudiante.nombres}</td>
              <td>{estudiante.apellidos}</td>
              <td>{estudiante.fecha_nacimiento}</td>
              <td>{estudiante.carrera}</td>
              <td>{estudiante.nivel_preparacion}</td>
              <td>
                <button
                  className="estudiante-button estudiante-button-edit"
                  onClick={() => handleEditarEstudiante(estudiante.cedula)}
                >
                  Editar
                </button>
                <button
                  className="estudiante-button estudiante-button-delete"
                  onClick={() => handleEliminarEstudiante(estudiante.cedula)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="estudiante-button estudiante-button-create"
        onClick={toggleForm}
      >
        Crear Estudiante
      </button>

      {/* Formulario Estudiante */}
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <h2>Crear Estudiante</h2>
            <input
              type="text"
              name="cedula"
              value={newEstudiante.cedula}
              onChange={handleChange}
              placeholder="Cédula"
            />
            <input
              type="text"
              name="nombres"
              value={newEstudiante.nombres}
              onChange={handleChange}
              placeholder="Nombres"
            />
            <input
              type="text"
              name="apellidos"
              value={newEstudiante.apellidos}
              onChange={handleChange}
              placeholder="Apellidos"
            />
            <input
              type="date"
              name="fecha_nacimiento"
              value={newEstudiante.fecha_nacimiento}
              onChange={handleChange}
              placeholder="Fecha de Nacimiento"
            />
            <input
              type="text"
              name="carrera"
              value={newEstudiante.carrera}
              onChange={handleChange}
              placeholder="Carrera"
            />
            <input
              type="text"
              name="nivel_preparacion"
              value={newEstudiante.nivel_preparacion}
              onChange={handleChange}
              placeholder="Nivel de Preparación"
            />
            <button onClick={handleCrearEstudiante}>Guardar</button>
            <button onClick={handleCloseForm}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

const SolicitudesPage = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newSolicitud, setNewSolicitud] = useState({
    numero: "",
    fecha: "",
    motivo: "",
    fecha_nacimiento: "",
    tipo_postulacion: "",
    estado: "",
    estudiante_cedula: "",
  });

  useEffect(() => {
    getSolicitudes();
  }, []);

  const getSolicitudes = async () => {
    try {
      const response = await axiosInstance.get("/solicitud");
      setSolicitudes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = (event) => {
    setNewSolicitud({
      ...newSolicitud,
      [event.target.name]: event.target.value,
    });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleCrearSolicitud = async () => {
    try {
      const response = await axiosInstance.post("/solicitud", newSolicitud);
      console.log("Solicitud guardada:", response.data);
      handleCloseForm();
      await getSolicitudes();
    } catch (error) {
      alert(error);
    }
  };
  const handleAceptarSolicitud = async (numero) => {
    try {
      const response = await axiosInstance.get(`/solicitud/${numero}`);
      const solicitud = response.data;
      solicitud.estado = "Aceptada";
      console.log(solicitud);
      await axiosInstance.put(`/solicitud/${numero}`, solicitud);
      await getSolicitudes();
    } catch (error) {
      alert(error);
    }
  };

  const handleRechazarSolicitud = async (numero) => {
    try {
      const response = await axiosInstance.get(`/solicitud/${numero}`);
      const solicitud = response.data;
      solicitud.estado = "Rechazada";
      console.log(solicitud);
      await axiosInstance.put(`/solicitud/${numero}`, solicitud);
      await getSolicitudes();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="page">
      <h1>Solicitudes de Beca</h1>
      <table>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Fecha</th>
            <th>Motivo</th>
            <th>Tipo Post.</th>
            <th>Estado</th>
            <th>Estudiante</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud) => (
            <tr key={solicitud.numero}>
              <td>{solicitud.numero}</td>
              <td>{solicitud.fecha}</td>
              <td>{solicitud.motivo}</td>
              <td>{solicitud.tipo_postulacion}</td>
              <td>{solicitud.estado}</td>
              <td>{solicitud.estudiante_cedula}</td>
              <td>
                <button
                  className="solicitud-button solicitud-button-aceptar"
                  onClick={() => handleAceptarSolicitud(solicitud.numero)}
                >
                  Aceptar
                </button>
                <button
                  className="solicitud-button solicitud-button-rechazar"
                  onClick={() => handleRechazarSolicitud(solicitud.numero)}
                >
                  Rechazar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="solicitud-button solicitud-button-create"
        onClick={toggleForm}
      >
        Crear Solicitud
      </button>
      {/* Formulario Solicitud */}
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <h2>Crear Solicitud</h2>
            <input
              type="text"
              name="numero"
              value={newSolicitud.numero}
              onChange={handleChange}
              placeholder="Número"
            />
            <input
              type="date"
              name="fecha"
              value={newSolicitud.fecha}
              onChange={handleChange}
              placeholder="Fecha"
            />
            <input
              type="text"
              name="motivo"
              value={newSolicitud.motivo}
              onChange={handleChange}
              placeholder="Motivo"
            />
            <input
              type="text"
              name="tipo_postulacion"
              value={newSolicitud.tipo_postulacion}
              onChange={handleChange}
              placeholder="Tipo de postulación"
            />
            <input
              type="text"
              name="estado"
              value={newSolicitud.estado}
              onChange={handleChange}
              placeholder="Estado"
            />
            <input
              type="text"
              name="estudiante_cedula"
              value={newSolicitud.estudiante_cedula}
              onChange={handleChange}
              placeholder="Estudiante"
            />
            <button onClick={handleCrearSolicitud}>Guardar</button>
            <button onClick={handleCloseForm}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
