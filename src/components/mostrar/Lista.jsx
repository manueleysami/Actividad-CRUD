import ItemLista from './ItemLista';
function Lista(props) {
  return (
    <div className="container text-center my-3">
      <div>
        {props.listaItems.map((item) => (
          <ItemLista
            key={item.id}
            item={item}
            BorrarItem={props.BorrarItem}
            ItemFavorito={props.ItemFavorito}
          />
        ))}
      </div>
    </div>
  );
}

export default Lista;
