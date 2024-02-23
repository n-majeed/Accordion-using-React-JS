import { useState } from "react";
import Questions from "./Data";
import ShowAccordian from "./ShowAccordian";

function MyAccordion(){
const [ques, setQues]= useState(Questions)
    return(
    <><div className="main_div">
  <div className="center_div">
    <h1 className="Heading"style={{textAlign:"center"}}>ReactJS Interview Questions</h1>
  
   {ques.map((element)=>{
    return(<ShowAccordian  {...element} /> )
   })}
   </div>
   </div>
    </>
    )
}
export default MyAccordion;