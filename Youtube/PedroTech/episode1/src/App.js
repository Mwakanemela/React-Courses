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

   var [count, setCount] = useState(0)

   const increaseNumber = () => {
     setCount(count + 1)
   }

const decreaseNumber = () => {
     setCount(count - 1)
   }
const setNumberToZero = () => {
     setCount(count = 0)
   }
   

   const [counterProgram, setCounterProgram] = useState(false)


const toggleCounterProgram = (event) => {
     setCounterProgram(!counterProgram )
   }
  return (
    <div className="App">
      <br />
      <button onChange={toggleCounterProgram}>Counter Program</button>
      <br/><br/><br/>
      <button onClick={toggleText}>Toggle Text</button>
      <button onClick={changeThemeColor}>Change Theme Color</button>
      {showText && <h1>Change visibility</h1>}
      <h1 style={{ color: changeColor }}>Change Theme Color</h1>



      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber}>Decrease</button>
      <button onClick={setNumberToZero}>Set to Zero</button>
      {
        count
      }
    </div>
  );
}
   
export default App;
