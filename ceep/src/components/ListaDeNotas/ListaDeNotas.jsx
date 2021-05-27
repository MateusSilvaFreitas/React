import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

//Se houver o default, não preciso colocar entre chaves, se não houver, ao importar esta classe, preciso colocar o nome dela entre chaves
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="list-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
