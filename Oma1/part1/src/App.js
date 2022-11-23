const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const nimi = "Mikael"
  const ika = 24

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={nimi} age={ika}/>
      <Hello name="Lassi" age={24+7}/>
    </div>
  )
}


export default App
