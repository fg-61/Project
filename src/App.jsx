import './App.css'
import Dropdown from './components/Dropdown'

function App() {

  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" }
  ];

  return (
    <div className="App">
      <Dropdown isMulti placeHolder="Select..." options={options} />
    </div>
  )
}

export default App
