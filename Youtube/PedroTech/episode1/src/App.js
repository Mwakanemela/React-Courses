import './App.css';
import {useState} from "react"
 function App() {
  
   var [showText, setShowText] = useState(true)
   const toggleText = () => {
     setShowText(!showText)
   }

   const [changeColor, setChangeColor] = useState("black")
   const changeThemeColor = () => {
     setChangeColor(changeColor === "black" ? "red" : "black" )
   }
  return (
    <div className="App">
      <button onClick={toggleText}>Toggle Text</button>
      <button onClick={changeThemeColor}>Change Theme Color</button>
      {showText && <h1>Change visibility</h1>}
      <h1 style={{ color: changeColor }}>Change Theme Color</h1>
    </div>
  );
}
   
export default App;
