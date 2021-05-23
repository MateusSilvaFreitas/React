import React, { Component } from "react";

//Se houver o default, não preciso colocar entre chaves, se não houver, ao importar esta classe, preciso colocar o nome dela entre chaves
export default class ListaDeNotas extends Component{
    render(){
        return (
            <ul>
            <li>
              <section>
                <header>Titulo</header>
                <p>Nota</p>
              </section>
            </li>
            <li>
              <section>
                <header>Titulo</header>
                <p>Nota</p>
              </section>
            </li>
            <li>
              <section>
                <header>Titulo</header>
                <p>Nota</p>
              </section>
            </li>
          </ul>
        );
    }
}