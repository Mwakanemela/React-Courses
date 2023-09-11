import './App.css';

function App() {
  
  const area = 25;
  return (
    <div className="App">
      <h1 className="name">Mwakanemela Kayange</h1>
      <div>{area == 25 ? <p>You live in area 25</p> : <p>You dont live in 25</p>}</div>
    </div>
  );
}

export default App;
