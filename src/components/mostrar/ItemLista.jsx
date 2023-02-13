import iconoFavorito from "../../assets/heart.png";
import iconoBorrar from "../../assets/delete.png";

function ItemLista(props) {
  return (
    <div className="card m-5">
      <div className="card-header">
        <div className="d-flex justify-content-between my-3">
          <h5 className="card-title text-success">{props.item.usuario}</h5>
          <div>
            <button
              type="button"
              className={`btn btn-${props.item.favorito ? "" : "outline-"}success btn-sm rounded-circle mx-3`}
              onClick={() => props.ItemFavorito(props.item)}
            >
              <img src={iconoFavorito} alt="Favorito" className="mb-1" />
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm rounded-circle mx-3"
              onClick={() => props.BorrarItem(props.item.id)}
            >
              <img src={iconoBorrar} alt="Borrar" className="mb-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="card-body text-start">
        <p className="">{props.item.contenido}</p>
      </div>
    </div>
  );
}

export default ItemLista;
