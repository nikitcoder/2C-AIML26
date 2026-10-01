/*function App(){
  function showMessage(){
    alert("Web development is taught by Vikas sir");
  }
  return(
    <div>
      <h1>Event Handing</h1>
      <button onClick={showMessage}>
        Click Me
      </button>
    </div>


  );
}
export default App;*/

import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  function increaseCount(){
    setCount(count+1);

  }
   function decreaseCount(){
    setCount(count-1);
  }

   function resetCount(){
    setCount(0);
  }
  return(
    <div>
       <h2>React count</h2>
       <h1>{count}</h1>
        <button onClick={increaseCount}>Increase</button><br/>
        <button onClick={decreaseCount}>Decrease</button><br/>
        <button onClick={resetCount}>Reset</button> 

    </div>
   
  )
    
}
export default App;