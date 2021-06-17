import React, { Component } from "react";
import "./style.css";
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'

class CardNota extends Component {

  _handledeletar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <section className="class-nota">
        <header>
          <h1>{this.props.titulo}</h1>
          <DeleteSVG onClick={this._handledeletar.bind(this)}/>
        </header>
        <p>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
