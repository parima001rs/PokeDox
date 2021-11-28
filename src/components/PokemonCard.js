import React from 'react'

const PokemonCard = ({id, image, name, type }) => {
    return (
        <div className="card-container">
            <small>#0{id}</small>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <small>Type: {type}</small>
        </div>
    )
}

export default PokemonCard
