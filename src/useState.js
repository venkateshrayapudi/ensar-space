import React from "react";
import { useState } from "react";
const State = () => {
 const [count,setcount] = useState(0); 
  return (
    <div>
<center>
  <h3>useState</h3>
  <button onClick={()=>setcount(count+1)}>+</button>
  <h1>{count}</h1>
  <button onClick={()=>setcount(count-1)}>-</button>
</center>
    </div>
  )
}
export default State
