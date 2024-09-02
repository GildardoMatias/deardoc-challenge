import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { getPokemon } from '../functions/fetch'
import './main.css'

export default function Details() {

    const { pokemonId } = useParams()

    const navigate = useNavigate()

    const [pokemonData, setPokemonData] = useState(null)

    useEffect(() => {
        getPokemon(pokemonId).then((pokemon) => setPokemonData(pokemon))
    }, [])



    const StatBar = ({ stat, score }) => {
        const maxScore = 200;
        const percentage = (score / maxScore) * 100;

        return (
            <div style={{ marginBottom: '10px', display: 'flex' }}>
                <div style={{ width: '30%' }}>{stat}</div>
                <div style={{ backgroundColor: '#e0e0e0', width: '60%', height: '12px', borderRadius: '5px' }}>
                    <div
                        style={{
                            backgroundColor: '#76c7c0',
                            width: `${percentage}%`,
                            height: '100%',
                            borderRadius: '5px',
                        }}
                    />
                </div>
            </div>
        );
    };

    if (pokemonData === null) return <div>Loading...</div>

    return (
        <div>
            <div onClick={() => navigate(-1)}>
                <FaArrowLeft className='button' />
            </div>
            <div className='bigcard'>
                {pokemonId}
                <br />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

                    <div style={{ width: 250, height: 250, backgroundColor: 'white', borderRadius: 12, padding: 25, justifySelf: 'center' }}>
                        <img width={200} src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
                    </div>
                </div>

                <br />

                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: 12 }}>
                    <div className='thumb'>
                        <img width={100} src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                    </div>
                    <div className='thumb'>
                        <img width={100} src={pokemonData.sprites.back_default} alt={pokemonData.name} />
                    </div>
                    <div className='thumb'>
                        <img width={100} src={pokemonData.sprites.front_shiny} alt={pokemonData.name} />
                    </div>
                    <div className='thumb'>
                        <img width={100} src={pokemonData.sprites.back_shiny} alt={pokemonData.name} />
                    </div>
                    <div className='thumb'>
                        <img width={100} src={pokemonData.sprites.other.home.front_default} alt={pokemonData.name} />
                    </div>
                    <div className='thumb'>
                        <img width={100} src={pokemonData['sprites']['other']['official-artwork']['front_default']} alt={pokemonData.name} />
                    </div>
                </div>


                <br />

                <div style={{ display: 'flex', gap: 20 }}>

                    <div style={{ backgroundColor: 'white', width: '46%', padding: 8, borderRadius: 12 }}>
                        <span>STATS</span>
                        {pokemonData.stats.map((stat) => (
                            <div>
                                <StatBar stat={stat['stat']['name']} score={stat['base_stat']} />
                            </div>
                        ))}
                    </div>



                    <div style={{ backgroundColor: 'white', width: '46%', borderRadius: 12 }}>
                        <span>DATA</span>
                        <div>ID {pokemonData.id}</div>
                        <div>Order {pokemonData.order}</div>
                        <div>Height {pokemonData.height}</div>
                        <div>Weight {pokemonData.weight}</div>

                        <span>TYPES</span>
                        {
                            pokemonData.types.map((type) => (
                                <div>{type.type.name}</div>
                            ))
                        }

                        <span>HABILITIES</span>
                        {pokemonData.abilities.map((ability) => (
                            <div>{ability.ability.name}</div>
                        ))}
                        <br />

                    </div>

                </div>

            </div>
        </div>
    )
}
