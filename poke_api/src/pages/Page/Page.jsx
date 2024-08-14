import React from "react";
import { useParams } from "react-router-dom";
import usePokeId from "../../services/hooks/UsePokeId";

const Page = () => {
    const { id } = useParams();
    const pokemonDetails = usePokeId(id);
    console.log(id);

    if (!pokemonDetails) {
        return <div>Loading...</div>;
    
    }

    return (
        <div>
            {/* <h1>{poke}</h1>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} /> */}
        </div>
    );
}

export default Page;