import './styles.css'

export const Result = ({ result, title, description }) => {

  const color = {
    dangerous: "#FF0000",
    safe: "#00FF00",
    unrecommended: "#FFA500"
  }[result.type] ?? '#000000'

  return (
    <div className='resultContainer' style={{
      borderColor: color
    }}>
      <h1 style={{
        color: color
      }}>
        {title}
      </h1>
      <p>{result.message}</p>
    </div>
  )
}