import React, { Component } from 'react'

class Button extends Component {
    state = {
        messages: ['Cadastrar usuário', 'Excluir usuário', 'Editar usuário']
    }

    render() {
        return (
            <ul>
                {this.state.messages.map(message => (
                    <button key={message}>{message}</button>
                ))}
            </ul>
        )
    }
}

export default Button
