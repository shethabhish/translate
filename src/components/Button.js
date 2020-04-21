import React, { Component } from 'react';
import languageContext from './context/languageContext';

class Button extends Component {
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }
  render() {
    return (
      <button className="ui button primary">
        <languageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </languageContext.Consumer>
      </button>
    );
  }
}

export default Button;
