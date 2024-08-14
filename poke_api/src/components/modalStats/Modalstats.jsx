import "./Modalstats.css"
import useFetchPokemonDetails from "../../services/hooks/PokeDetails"

const StatsModal = ({pokemonDetails, handleClick}) =>{

return(
<div className="customCard-modal" onClick={handleClick}>
  <div className="title-modal">
  <img src={pokemonDetails.sprites.versions["generation-viii"].icons.front_default} alt={pokemonDetails.name} className='image-content'/>
  <h3>{pokemonDetails.name}</h3>
  </div>
      <p>Height: {pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails.weight}</p>
      <p>Base Experience: {pokemonDetails.base_experience}</p>
      <h4>Abilities:</h4>
      <ul>
        {pokemonDetails.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h4>Types:</h4>
      <ul>
        {pokemonDetails.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <h4>Base Stats:</h4>
      <ul>
        {pokemonDetails.stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
)
}

export default StatsModal;

