import { Component } from 'react';
import './App.css';
import { getTricks } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allTricks: []
    }
  }

  componentDidMount = () => {
    getTricks().then(tricks => this.setState({ allTricks: tricks}))
  }

  render() {
    return (
      <div className='App'>
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;