import * as React from 'react';
import MainEntrance from './components/main';
import './stylesheets/App.scss';

class App extends React.Component {


  public render() {
    return (
      <div className="App">
        <MainEntrance />     
      </div>
    );
  }
}

export default App;
