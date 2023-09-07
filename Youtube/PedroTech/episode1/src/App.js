import './App.css';

function App() {
  const name = <h1>Mwaka</h1>
  const numbers = <p>1</p>
  const email = <h2>email@getDefaultNormalizer.com</h2>
  const user = (
    <div>
{name}
    {numbers}
    {email}
    </div>
    
  );
  return (
    <div className="App">
      {user}
      {user}
      {user}
    </div>
  );
}

export default App;
