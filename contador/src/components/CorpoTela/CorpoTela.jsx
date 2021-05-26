import React, { Component } from "react";
import "./style.css";

class CorpoTela extends Component {
  constructor() {
    super();
    this.state = {
      numero: 0,
      resetados: "",
    };
  }
  _atualizaNumero() {
    console.log(this.state)
    let novoNumero = this.state.numero;
    const novoState = {
      numero: ++novoNumero,
    };
    this.setState(novoState);
  }
  _resetaNumero() {
    let numeroResetado;
    if (this.state.resetados === "") {
      numeroResetado = this.state.numero;
    } else {
      numeroResetado = this.state.resetados + ", " + this.state.numero;
    }
    const novoState = {
      numero: 0,
      resetados: numeroResetado,
    };
    this.setState(novoState);
  }
  render() {
    return (
      <section className="corpoPagina">
        <article>Clique no botão para incrementar um numero!</article>
        <button onClick={this._atualizaNumero.bind(this)}>Botão</button>
        <p id="numero" onClick={this._resetaNumero.bind(this)}>
          {this.state.numero}
        </p>
        <article>Clique sobre o numero para reseta-lo!</article>
        <article>O numero foi resetado em:</article>
        <article>{this.state.resetados}</article>
      </section>
    );
  }
}

export default CorpoTela;
