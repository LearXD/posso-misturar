import './styles.css'

export const Result = ({ result, title, description }) => {

  const dangerous = result.type === "dangerous"

  return (
    <div className='resultContainer' style={{
      borderColor: dangerous ? "#FF0000" : "#00FF00"
    }}>
      <h1 style={{
        color: dangerous ? "#FF0000" : "#00FF00"
      }}>
        {title}
      </h1>
      <p>{result.message}</p>
    </div>
  )
}