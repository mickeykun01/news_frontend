import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar =() =>{
    const [show, setshow] = useState(true)
    
    return(
       <>
        <div className="header">
            <i id="response-bar" onClick={()=>{setshow(!show)}} className="fa-solid fa-bars"></i> 

       {show &&  <ul id="navheader">
                <li><Link id="none" to ="/">Home</Link></li>
                <li><Link id="none" to ="/bollywood">Bollywood</Link></li>
                <li><Link id="none" to ="/technology">Technology</Link></li>
                <li><Link id="none" to ="/hollywood">Hollywood</Link></li>
                <li><Link id="none" to ="/fitness">Fitness</Link></li>
                <li><Link id="none" to ="/food">Food</Link></li>
            </ul>
            }
            <hr/>
        </div>
        </>
  
    )
}

export default Navbar