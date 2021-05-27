import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }
  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  _handleCriarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }
  render() {
    return (
      <form
        className="form-cadastro"
        onSubmit={this._handleCriarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Titulo"
          className="form-cadastro-input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          className="form-cadastro-input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro-input">Criar Nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
