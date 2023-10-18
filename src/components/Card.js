import React from "react";
import user from "../images/OIP.jpg"
import "./App.css"
const Card = (props)=>{
    const info = props.details;
    const currUser = props.userStatus.find((obj) => obj.id === props.details.userId);
    return(
        <div className = "card">
            <div className = "header">
                <div style={{display:"flex",padding:"5px",alignItems:"center"}}><h2>{info.id}</h2></div>
                <div className = "imge">
                    <div className = "online" style={{backgroundColor:currUser.available?"green":"grey"}}></div>
                    <img src ={user} alt="user"/>
                </div>      
            </div>
            <div className = "content"><p>{info.title}</p></div>
            <div className = "footer"> 
                <div className = "tag">
                    <div className="dot"></div>
                    <div className="footer-content">{info.tag}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;