import { useState, useEffect } from "react";
import "./App.css";
import ModalAreaCrear from "./components/crear/ModalAreaCrear";
import Lista from "./components/mostrar/Lista";

function App() {
  //Lista donde se almacenan los tweets
  const [listaItems, setListaItems] = useState([]);
  // Estatus que verifica si hay mensajes
  const [msg, setMsg] = useState({
    estado: false,
    msg: "",
    clase: "",
  });

  // funcion que recibe los datos del item y los añade a la lista de items
  const CrearItem = (item) => {
    setListaItems([...listaItems, item]);

    // establece que hay un mensaje
    setMsg({
      estado: true,
      msg: "Se ha creado un nuevo tweet",
      clase: "alert alert-success",
    });
    // coloca el estado del mensaje en false
    setTimeout(() => {
      setMsg({
        estado: false,
        msg: "",
        clase: "",
      });
    }, 5000);
  };

  // funcion que borra un item de la lista
  const BorrarItem = (id) => {
    const condicion = confirm("Eliminar este item?");
    // confirmacion de eliminar tweet
    if (condicion) {
      setListaItems(listaItems.filter((i) => i.id != id));

      setMsg({
        estado: true,
        msg: "Se ha eliminado un tweet",
        clase: "alert alert-danger",
      });
      setTimeout(() => {
        setMsg({
          estado: false,
          msg: "",
          clase: "",
        });
      }, 5000);
    }
  };

  // funcion que marca un item como favorito y veceversa
  const ItemFavorito = (item) => {
    setListaItems(
      listaItems.map((i) =>
        i.id == item.id ? { ...i, favorito: !i.favorito } : i
      )
    );
  };

  // revisa si hay datos en el local storage y lo añade a la lista de items
  useEffect(() => {
    let localStorageDatos = localStorage.getItem("items");
    if (!localStorageDatos) return;

    setListaItems(JSON.parse(localStorageDatos));
  }, []);

  // revisa si hay cambios en la lista y actualiza el local storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(listaItems));
  }, [listaItems]);

  return (
    <div>
      {msg.estado ? (
        <div className={msg.clase} role="alert">
          {msg.msg}
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="d-flex justify-content-between my-3">
          <h1>Tweets</h1>
          <ModalAreaCrear CrearItem={CrearItem} />
        </div>
        {listaItems.length < 1 ? (
          <div className="alert alert-danger" role="alert">
            No hay Tweets registrados
          </div>
        ) : (
          <Lista
            listaItems={listaItems}
            BorrarItem={BorrarItem}
            ItemFavorito={ItemFavorito}
          />
        )}
      </div>
    </div>
  );
}

export default App;
