import { useState } from "react";

function Card({id,name,image,info,price,removeTour }   ){

    const[readmore,setReadmore]=useState(false); 

    const description =readmore? info:`${info.substring(0,200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }



    return(
        <div className="card">
            <img src={image}  alt="" className="image"></img>
            <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price">₹ {price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>

            {/* description */}
            <div className="description">
            {description}
            <span className="read-more" onClick={readmoreHandler}>{readmore?`ShowLess`:`ReadMore`}</span>
            </div>     
            </div>
            
            <button className="btn-red" onClick={()=> removeTour(id)}>
            Not Intrested
            </button>

        </div>
    );
}
export default Card;