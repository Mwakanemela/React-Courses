import './App.css';

function App() {
  
  const area = 25;
  const isGreen = true;

  return (
    <div className="App">
      <h1 className="name">Mwakanemela Kayange</h1>
      <div>{area == 25 ? <p>You live in area 25</p> : <p>You dont live in 25</p>}</div>
      <h1 style={{color:isGreen ? "yellow" : "red"}} >Change color</h1>
    </div>
  );
}

export default App;
