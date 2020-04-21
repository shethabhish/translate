import React, { Component } from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from './context/languageContext';
import LanguageSelector from './languageSelector';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <UserCreate />
        </LanguageStore>
      </div>
    );
  }
}

export default App;
