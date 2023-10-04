import './styles.css'

const CardView = function ({
  title,
  description,
}) {
  return (
    <div className="card-container">
      {/* <div className='card-image-container'>
        <img src={image} alt="user" />
      </div> */}

      <div className='card-text-container'>
        <h3> {title} </h3>
        <p> {description} </p>
      </div>
    </div>
  )
}

export default CardView;