import React from 'react';
import ReactDOM from 'react-dom';
import NavMenu from './components/NavMenu.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div className="outer-container">
        <NavMenu />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'));