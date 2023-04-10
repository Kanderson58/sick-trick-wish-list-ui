import './Form.css'
import { Component } from 'react'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  submitTrick = (event) => {
    event.preventDefault()
    this.props.addNewTrick(this.state)
  }

  render() {
    return (
      <form>
        <select id='stance' onChange={this.handleChange} >
          <option value='none'>Choose your Stance</option>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>

        <input 
          id='name'
          type='text' 
          placeholder='Name of Trick' 
          onChange={this.handleChange} >
        </input>

        <select id='obstacle' onChange={this.handleChange} >
          <option value='none'>Choose your Obstacle</option>
          <option value='flat ground'>Flatground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>

        <input
          id='tutorial' 
          type='text' 
          placeholder='Link to Tutorial'
          onChange={this.handleChange} >
        </input>

        <button onClick={this.submitTrick}>Send It!</button>
      </form>
    )
  }
}

export default Form