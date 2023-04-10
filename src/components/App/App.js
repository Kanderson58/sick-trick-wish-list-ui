import { Component } from 'react';
import './App.css';
import { getTricks } from '../../apiCalls';
import Trick from '../Trick/Trick';
import Form from '../Form/Form';

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
        <Form />
        <section className='tricks'>
        {this.state.allTricks.map(trick => <Trick key={trick.name} trick={trick}/>)}
        </section>
      </div>
    );
  }
}

export default App;