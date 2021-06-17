import React, { Component } from "react";
import "./style.css";
class Categorias extends Component {
  render() {
    return (
      <section className="lista-categorias">
        <input type="text" placeholder="Digite a categoria"/>
        <ul>
          <li>Categoria A</li>
          <li>Categoria B</li>
          <li>Categoria C</li>
        </ul>
        
      </section>
    );
  }
}

export default Categorias;
