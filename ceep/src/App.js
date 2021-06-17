import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/";
import FormularioCadastro from "./components/FormularioCadastro/";
import Categorias from "./components/Categorias/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }
  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novaNotaArray = [...this.state.notas, novaNota];
    const novoState = {
      notas: novaNotaArray,
    };
    this.setState(novoState);
  }
  apagarNota(indice) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);
    this.setState({ notas: arrayNotas });
  }
  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main>
          <Categorias/>
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.apagarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
