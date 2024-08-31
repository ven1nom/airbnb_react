import React from "react"
import star from "../images/star.png"
import katieZaferes from "../images/katie-zaferes.png"
import weddingPhotography from "../images/wedding-photography.png"
import mountainBike from "../images/mountain-bike.png"

const cardImages = {
    "katie-zaferes.png": katieZaferes,
    "wedding-photography.png": weddingPhotography,
    "mountain-bike.png": mountainBike
}

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img 
                src={cardImages[props.coverImg]} 
                className="card--image" 
                alt={props.title}
            />
            <div className="card--stats">
                <img src={star} className="card--star" alt="star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}