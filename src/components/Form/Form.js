import './Form.css'
import { Component } from 'react'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: '',
      trickName: '',
      obstacle: '',
      tutorial: ''
    }
  }

  render() {
    return (
      <div className='form'>
        <select id='stance'>
          <option value='none'>Choose your Stance</option>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>
        <input type='text' placeholder='Name of Trick' value={this.state.trickName}></input>
        <select id='obstacle'>
          <option value='none'>Choose your Obstacle</option>
          <option value='flat ground'>Flatground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>
        <input type='text' placeholder='Link to Tutorial' value={this.state.tutorial}></input>
        <button>Send It!</button>
      </div>
    )
  }
}

export default Form