import React from "react"
import pic from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={pic} className="nav--logo" />
        </nav>
    )
}