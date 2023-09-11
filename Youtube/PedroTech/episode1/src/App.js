import './App.css';
import {User} from './User'
function App() {
  const users = [
    {name: "Sibo", year: 1998},
    {name: "Mwaka", year:2002},
    {name: "Angellah", year: 2006},
    {name: "Joshua", year:2012}
  ]
  return (
    <div className="App">
        {users.map((user, key) => {
          return ( 
            <User name={user.name}  year={user.year} />
          )
        })}
    </div>
  );
}
   
export default App;
