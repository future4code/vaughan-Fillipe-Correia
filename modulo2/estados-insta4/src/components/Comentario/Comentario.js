import React, { Component } from "react";


export class Comentario extends Component {
  
    render() {
      return (
        <Comentario>
          
            <h5>{this.props.comentario}</h5>
          
        </Comentario>
      );
    }
  }