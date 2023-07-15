import { useEffect, useRef } from "react";
import "./tooltip.css"

const Tooltip=({position})=> {
    
    const spanRef = useRef()

    useEffect(() =>{

        if(position=== 'top'){
            spanRef.current.style.bottom ='120%';
            spanRef.current.style.left ='50%';
            spanRef.current.style.marginLeft ='-50%'; 
        }
        if(position=== 'bottom'){
            spanRef.current.style.bottom ='50%';
            // spanRef.current.style.bottom ='135%';
            spanRef.current.style.marginBottom ='-20%';
            spanRef.current.style.left = '5%'; 
        }
        if(position=== 'left'){
            spanRef.current.style.top ='-50%';
            spanRef.current.style.right ='100%';
        }
        if(position=== 'right'){
            spanRef.current.style.top ='-50%';
            spanRef.current.style.left ='100%';
        }

    },[position]);

    return(
        <div className="tooltip">
                Hover On Me To Know The Secret!
                <span ref={spanRef} className="tooltiptext">Welcome To Tooltip</span> 
        </div>
    )
    
  }
  
  export default Tooltip;
  