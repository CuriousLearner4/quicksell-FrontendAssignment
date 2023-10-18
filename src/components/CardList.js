import React from "react";
import Card from "./Card";
import "./App.css"
const CardList = (props)=>{

    const title = props.title;
    const count = props.count;
    console.log(props.userAvailability);
    const renderedList = props.list.map((details)=>{
        return <Card details={details} userStatus={props.userAvailability} key={details.id}/>
    });

    return(
        <div className="test">
        <div className="head-tag">
            <div className="head-tag-left">
                <span className="material-symbols-outlined">
                more_horiz
                </span>
                <span style={{color:"black",fontSize:"12px",margin:"4px"}}>{title} <span>{count}</span></span>
            </div>
            <div>
                <span className="material-symbols-outlined">
                add
                </span><span className="material-symbols-outlined">
                more_horiz
                </span>
            </div>
        </div>  
        {renderedList}
    </div>
    );
}


export default CardList;