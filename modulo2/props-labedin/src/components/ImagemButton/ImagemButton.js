import React from 'react';
import { ImageButton } from '../../styles';

function ImagemButton(props) {
    return (
        <ImageButton>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButton>

    )
}

export default ImagemButton;