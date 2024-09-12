import React, { useState } from "react"
import pic from "../images/airbnb-logo.png"

export default function Navbar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [showSearch, setShowSearch] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(searchTerm)
        setShowSearch(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={pic} className="nav--logo" alt="Airbnb logo" />
            </div>
            <div className="navbar-center">
                {showSearch ? (
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search experiences"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">Go</button>
                    </form>
                ) : (
                    <button onClick={() => setShowSearch(true)} className="search-button">
                        Search
                    </button>
                )}
            </div>
            <div className="navbar-right">
                <button>Become a Host</button>
                <div className="user-menu">
                    <img src="/user-icon.png" alt="User" className="user-icon" />
                </div>
            </div>
        </nav>
    )
}