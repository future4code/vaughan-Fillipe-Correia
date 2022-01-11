import React from "react";
import { SmallCard } from "../../styles";

function CardPequeno(props) {
  return (
    <SmallCard>
      <div>
        <img src={props.imagem} />
      </div>
      <div>
        <h4>{props.nome}</h4>
      </div>
      <div>
        <p>{props.texto}</p>
      </div>
    </SmallCard>
  );
}

export default CardPequeno;
