import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("ME VOLVI A GENERAR CONCHETUMADREE");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
})
