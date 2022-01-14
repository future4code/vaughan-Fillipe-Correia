import React from "react";
import styled from 'styled-components';

const ContainerBalao = styled.div`
    width: 50%;
    /* min-width: 200px; */
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000;
    padding: 10px;
    margin-bottom: 10px;
`;

const BotaoDelete = styled.button`
    /* position: absolute; */
    background-color: #fff;
    border: none;
    color: #000;
    padding: 5px;
    margin-left: 15px;
    border-radius: 5px;
    border: 1px solid #000;
    cursor: pointer;

    &:hover {
        background-color: red;
        transition: background-color 0.5s;
    } 
`;

class ChatBubble extends React.Component {
    render() {
        return (
            <ContainerBalao onDoubleClick={this.props.onClick}>
                <div>
                    <h3>{this.props.nome}</h3>
                    <p>{this.props.mensagem}</p>
                </div>
                <div>
                {/* <BotaoDelete onClick={this.props.onClick}>X</BotaoDelete> */}
                </div>
            </ContainerBalao>
            
        );
    }
}


export default ChatBubble;


