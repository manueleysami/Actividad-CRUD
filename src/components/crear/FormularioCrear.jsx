import { useState } from "react";

function FormularioCrear(props) {
  const [usuario, setUsuario] = useState("");
  const [contenido, setContenido] = useState("");
  const [err, setErr] = useState(false);

  // valida los datos del formulario para crear un item
  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario.trim() == "" || contenido.trim() == "") {
      setErr(true);
      return;
    }

    setErr(false);

    const data = {
      id: new Date().getTime(),
      usuario,
      contenido,
      favorito: false,
    };

    props.CrearItem(data);
    setUsuario("");
    setContenido("");
    props.AlternaModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body ">
        <div className="mb-3">
          <div className="form-floating">
            <input
              type="text"
              className={
                err && usuario.trim() == ""
                  ? "form-control mb-3 is-invalid"
                  : "form-control mb-3"
              }
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
            <label htmlFor="usuario">Usuario</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className={
                err && contenido.trim() == ""
                  ? "form-control is-invalid"
                  : "form-control"
              }
              placeholder="Tweet"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
            />
            <label htmlFor="tweet">Tweet</label>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-success w-100 mx-2">
              Agregar
            </button>
          </div>
          <div className="col">
            <button
              type="reset"
              className="btn btn-secondary w-100 mx-2"
              onClick={() => {
                setUsuario("");
                setContenido("");
                props.AlternaModal();
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
        {err ? (
          <div className="alert alert-danger mt-3" role="alert">
            Complete todos los campos.
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
}

export default FormularioCrear;
