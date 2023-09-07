import './App.css';

function App() {
  
  
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon"/>

<Job salary={80000} position="Senior SDE" company="Amazon"/>
<Job salary={90000} position="Senior SDE" company="Amazon"/>

    </div>
  );
}
const Job = (probs) => {
  return(
    <div>
      <h1>{probs.salary}</h1>
      <p>{probs.position}</p>
      <p>{probs.company}</p>
    </div>
    
  )
}

export default App;
