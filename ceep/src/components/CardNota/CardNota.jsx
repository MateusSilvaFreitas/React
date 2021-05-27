import React, { Component } from "react";

import "./style.css";

class CardNota extends Component {
  render() {
    return (
      <section className="class-nota">
        <header>
          <h1>{this.props.titulo}</h1>
        </header>
        <p>{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
