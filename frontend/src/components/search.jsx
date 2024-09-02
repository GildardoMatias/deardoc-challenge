import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdCatchingPokemon } from "react-icons/md";

const SearchPokemon = ({ onSearch, onReset }) => {


    const [query, setQuery] = useState("");

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div style={{ margin: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div onClick={() => onReset()} style={{ cursor: 'pointer', fontSize: 28, display: 'flex', alignItems: 'center' }}> <MdCatchingPokemon /> POKEDEX</div>
            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search Pokémon"
                    onKeyDown={handleKeyDown}
                    style={{ borderRadius: 8, height: 22, borderWidth: 1, borderColor: '#9aab9e' }}
                />
                <div onClick={handleSearch}><CiSearch style={{ fontSize: 26, cursor: 'pointer' }} /></div>
            </div>
        </div>
    );
};

export default SearchPokemon;
