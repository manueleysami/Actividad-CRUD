import FormularioCrear from "./FormularioCrear";
import * as bootstrap from 'bootstrap'

function ModalAreaCrear(props) {

  const AlternaModal = () => bootstrap.Modal.getOrCreateInstance(document.getElementById('formularioModal')).toggle()
  
  return (
    <div>
      <button
        type="button"
        className="btn btn-success mt-1"
        data-bs-toggle="modal"
        data-bs-target="#formularioModal"
      >
        Agregar Tweet
      </button>

      <div
        className="modal fade"
        id="formularioModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-success text-white">
              <h1 className="modal-title fs-5">Agregar Tweet</h1>
            </div>
            <div className="modal-body">
              <FormularioCrear CrearItem={props.CrearItem} AlternaModal={AlternaModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAreaCrear;
