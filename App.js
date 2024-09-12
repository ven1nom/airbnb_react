import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const [searchTerm, setSearchTerm] = useState("")

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    const filteredCards = cards.filter(card => 
        card.props.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    return (
        <div>
            <Navbar onSearch={handleSearch} />
            <Hero />
            <section className="cards-list">
                {searchTerm ? filteredCards : cards}
            </section>
        </div>
    )
}
