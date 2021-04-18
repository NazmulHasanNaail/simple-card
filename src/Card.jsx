import React from 'react';
import './card.css';

function Card(props){
    return <>
    <div className="car-col">
        <div className="card-body">
            <div className="Img-box">
            <img src={props.imgSrc} alt={props.title} />
            </div>
        <div className="card-info">
            <span className="card-cetagory">{props.cat}</span>
            <h3>{props.title}</h3>
            <a href={props.btnLink} className="card-btn">watch now</a>
        </div>
        </div>
    </div>
    </>
}
export default Card;