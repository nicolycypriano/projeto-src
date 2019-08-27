import React from "react";
import PropTypes from "prop-types";

import { ErrorStyled } from "./styles";

export default class Error extends React.Component {
  static propTypes = {
    message: PropTypes.string
  };

  render() {
    let message = this.props.message;
    if (!message) {
      message = 'Ocorreu um erro';
    }
    return (
      <ErrorStyled>
        <p>{message}</p>
      </ErrorStyled>
    );
  }
}
