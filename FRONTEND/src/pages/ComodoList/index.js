import React, { Component } from 'react';
import api from '../../services/api';


class ComodoList extends Component {

  state = {
    comodos: []
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    api.get(`/componentes/comodo/residencia/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ comodos: response.data.comodos });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (

      <ul>
        {this.state.comodos.map((elemento) =>
          <li key={elemento.id}>
            {elemento.nomeAtuador}
          </li>
        )
          ||
          <li>Nenhuma residência cadastrada!</li>}
      </ul>

    )
  }

}

export default ComodoList;