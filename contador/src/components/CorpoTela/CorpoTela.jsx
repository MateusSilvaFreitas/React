import React, { Component } from "react";
import "./style.css";

let numero = 0;
const atualizaNumero = () => {
  document.getElementById("numero").textContent = ++numero;
};

const resetaNumero = () => {
  let resetados = document.getElementById("resetados");
  if(!resetados.textContent){
    resetados.textContent = numero;
  } else {
    resetados.textContent += ", " + numero
  }
  
  numero = 0;
  document.getElementById("numero").textContent = numero;
};

class CorpoTela extends Component {
  render() {
    return (
      <section className="corpoPagina">
        <article>Clique no botão para incrementar um numero!</article>
        <button onClick={atualizaNumero}>Botão</button>
        <p id="numero" onClick={resetaNumero}>0</p>
        <article>Clique sobre o numero para reseta-lo!</article>
        <article>O numero foi resetado em:</article>
        <article id="resetados"></article>
      </section>
    );
  }
}

export default CorpoTela;
