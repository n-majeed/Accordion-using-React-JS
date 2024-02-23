import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function ShowAccordian({question,answer}){
const [show,setShow]=useState(false)
return(
<>
<div className="question" onClick={()=>{setShow(!show)}}>{show? <RemoveCircleOutlineIcon/>:<AddCircleOutlineIcon/>}
{question}</div>
<div className="ans">
<p>{show && answer}</p></div>
</>
)
}
export default ShowAccordian;