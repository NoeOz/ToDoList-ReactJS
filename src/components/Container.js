import React, { useState } from "react";
import Item from "./Item";

const Container = () => {
  //lista
  const [list, setList] = useState([]);
  //descripcion del item
  const [description, setDescription] = useState("");

  //agregar item
  const handleSubmit = (e) => {
      e.preventDefault();
      //creacion de un objeto {}
      handleAddItem({
          done: false,
          id: (+new Date()).toString(),
          description,
      });

      setDescription("");
  }

  //agregar item a la lista
  //funcion flechada
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
    //console.log("Nuevo elemento en lista: ",list);
  }

  //realizar el listado de los items
  //--pendientes
  const items = list.map((item) => <Item key={item.id} data={item} />);

  return (
    <div>
      <h1>Lista de tareas por hacer:</h1>
        <form className="form-add" onSubmit={handleSubmit}>
            <input
                className="inputAdd"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className="button" disabled={description ? "" : "disabled"}>Agregar</button>
        </form>

        {list.length ? items : "No hay tareas disponibles"}
    </div>
  );
};

export default Container;
