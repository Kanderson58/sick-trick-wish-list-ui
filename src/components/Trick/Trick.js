import './Trick.css'

const Trick = ({trick, removeTrick}) => {
  return (
    <div className='trick'>
      <p>{trick.name}</p>
      <p>Obstacle: {trick.obstacle}</p>
      <p className='tutorial'>Link to tutorial: 
        <a href={trick.tutorial}>{trick.tutorial}</a>
      </p>
    </div>
  )
}

export default Trick