import "./App.css";
import Cards from "./cards.js";
import arr from "./array";
import react, { useEffect, useState } from "react";
let first = 1,
last = 3;
const arr1 = arr(first, last);

function App() {

  const [A1ind, setA1ind] = useState(-1);
  
  useEffect(() => {
    console.log("aiind changed", A1ind);
  }, [A1ind]);

  return (
    <div className="App">
      <Cards
        arr1={arr1}
        last={last}
        first={first}
        A1ind={A1ind}
        setA1ind={setA1ind}
      />
    </div>
  );
}

export default App;
