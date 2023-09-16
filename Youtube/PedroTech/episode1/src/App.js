import './App.css';
import {useState} from "react"
 function App() {
  
   var [showText, setShowText] = useState(true)
   const toggleText = () => {
     setShowText(!showText)
   }
  return (
    <div className="App">
      <button onClick={toggleText}>Toggle Text</button>
      {showText && <h1>Change visibility</h1>}
    </div>
  );
}
   
export default App;
