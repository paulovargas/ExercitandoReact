import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Ana" sobrenome="Silva" />
      <FamiliaMembro nome="Gustavo" sobrenome="Lopes" />
    </div>
  );
};
