import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input type="text" placeholder="Titulo" className="form-cadastro-input"/>
        <textarea placeholder="Escreva sua nota..." className="form-cadastro-input"/>
        <button className="form-cadastro-input">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
