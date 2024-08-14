import React from "react";
import "./cardView.css";
// import CustomButton from "../components/CustomButton/CustomButton";
import useFetchPokemonDetails from "../services/pokeDetails";

const CardView = ({ pokemon }) => {
    const pokemonDetails = useFetchPokemonDetails(pokemon.url);
    const imageUrl = pokemonDetails ? pokemonDetails.sprites.front_default : "";
    
    return (
        <div>
        <img src={imageUrl} alt={pokemon.name} className="card-image"/>
        <CustomButton
            label="Ver detalles"
            onClick={() => console.log("Ver detalles")}
            />
        </div>
    );
}
export default CardView;