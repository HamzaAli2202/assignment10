import React from "react";
import { useState } from "react";
export const Radiuscounter = ()=>{
    const[radius,setCount]=useState(0)
    return(
        <div className="main">
        <button onClick={()=>setCount(radius+30)}>Radius +</button>
        <button onClick={()=>setCount(radius-30)}>Radius -</button>
        <div className="sub" style={{borderRadius:radius}}><h1>Assignment 10</h1></div>
        </div>
    )
}