import React from "react";
import { useState, useEffect} from "react";
const Effect = () => {
 const [count,setcount] = useState(0); 
 useEffect(()=>console.log(count),[count]);
  return (
    <div>
<center>
  <h3>useEffect</h3>
  <button onClick={()=>setcount(count+1)}>+</button>
  <h1>{count}</h1>
  <button onClick={()=>setcount(count-1)}>-</button>
</center>
    </div>
  )
}
export default Effect
