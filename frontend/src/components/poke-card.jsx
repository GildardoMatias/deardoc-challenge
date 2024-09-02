import React, { useEffect, useState } from 'react'
import { getPokemon } from '../functions/fetch'
import './main.css'
import { useNavigate } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function PokeCard({ name, favorite, setFavorite }) {

    const navigate = useNavigate()

    const [pokemonData, setPokemonData] = useState(null)

    useEffect(() => {
        console.log(name)
        getPokemon(name).then(pokemon => { console.log('last', pokemon); setPokemonData(pokemon) })
    }, [name])

    if (pokemonData === null) return <div className='card'>CARGANDO</div>

    return (
        <div className="card" >

            <div style={{
                backgroundColor: 'transparent',
                display: 'flex',
                justifyContent: 'flex-end',
                cursor: 'pointer',
                border: 'none',
                fontSize: '1.5rem',
            }} onClick={() => setFavorite(name)}>
                {
                    favorite === pokemonData.name ? <FaHeart color='red'/> : <FaRegHeart />
                }
            </div>

            <div onClick={() => navigate(`pokemon/${name}`)}>

                <img width={80} src={pokemonData.sprites.front_default} alt={pokemonData.name} />

                <div style={{ fontSize: 18, fontWeight: '600' }}>{pokemonData.name}</div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 12 }}>{pokemonData.id}</div>
                    <div style={{ fontSize: 12 }}>
                        {
                            pokemonData.types.map((type) => (
                                <div>{type.type.name}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
