import { useState } from "react";
import Questions from "./Data";

function Accordion(){
    const [show,setShow]= useState(false)
return(<>
    <div className="main_div">
<div className="center_div">
    <h1>ReactJS Interview Question</h1>
   { Questions.map((element)=>{
        return(<>
        <div onClick={()=> setShow(!show)}>{show?"-":"+"} </div>
        <div>{element.question}</div> 
        <div>{show && element.answer}</div></>)
    })}
    </div>
    </div>
</>)

}
export default Accordion;



<ShowAccordian 
        key={element.id}
        quest={element.question}
        answer={element.answer}
    