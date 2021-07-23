import { arrowUpOutline } from "ionicons/icons";
import React, { useState } from "react"


function Addcartedorange() {
  const [arr, setArr] = useState({"Orange": 0}) 
  return (
    <div > 
        
        
      <button
        onClick={() => {
           setArr(prevItem => ({...prevItem, Orange: prevItem.Orange+1 }))
          console.log(arr);
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
           setArr(prevItem => ({...prevItem, Orange: prevItem.Orange-1 }))
          console.log(arr);
        }}
      >
        Delete from Cart
      </button>
      {arr['Orange']}
    </div>
  );
}
export default Addcartedorange;
