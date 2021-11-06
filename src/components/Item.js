import React, { Fragment, useState } from "react";

const Item = (props) => {
  //recibiendo las props del componente padre
  /* var {
    data: { id, description, done },
  } = props; */
  const [id, setId] = useState(props.data.id);
  const [description, setDescription] = useState(props.data.description);
  const [done, setDone] = useState(props.data.done);

  //cambiar estado de la tarea
  const onChange = () => {
    //console.log("Tarea ->" + description + ", estado: " + done);
    setDone(!done);
  }

  return (
    <Fragment>
      <div className="item">
        <input name={id} type="checkbox" checked={done} onChange={onChange} />
        <p className={done ? "already" : "normal"}>{description}</p>
      </div>
    </Fragment>
  );
};

export default Item;
