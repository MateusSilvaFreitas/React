import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./style.css"

//Se houver o default, não preciso colocar entre chaves, se não houver, ao importar esta classe, preciso colocar o nome dela entre chaves
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="list-notas">
        {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, index) => {
          return (
            <li key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
