import './App.css';

function App() {
  const users = [
    {name: "Sibo", year: 1994},
    {name: "Mwaka", year:2002},
    {name: "Angellah", year: 2006},
    {name: "Joshua", year:2012}
  ]
  return (
    <div className="App">
        {users.map((user, key) => {
          return (
            <div>
              {user.name} {user.year}
            </div>
          )
        })}
    </div>
  );
}
   
export default App;
