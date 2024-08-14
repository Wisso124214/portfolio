import React, {useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import './CustomCard.css';
// import CustomButton from '../customButton/CustomButton';
// import pokeDetails from '../hooks/pokeDetails';
// import modalStats from '../modalStats/modalstats';
import StatsModal from '../modalStats/Modalstats';

const CustomCard = ({ handleClick, number, title, fetchUrl, imageKey, fetchfunction}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const pokemonDetails = fetchfunction(fetchUrl);
  const imageUrl = pokemonDetails ? pokemonDetails.sprites[imageKey] : '';
  // const handleClick = () => {
  //   console.log(pokemonDetails);
  // }
  const handleMouseEnter = () => {
    setIsModalVisible(true);
  };

  const handleMouseLeave = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="customCard"onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="customCard-content">
        <div className="customCard-id">
          <p>{ number() }</p>
        </div>
        <div className="customCard-body" onClick={handleClick}>
        {pokemonDetails ? (
            <img src={imageUrl} alt={title} className='customCard-image'/>
          ) : (
            <img src={imageKey} alt={title} className='customCard-image'/>
          )}
        </div>
        <div className='customCard-name'>
          <div className='name'>
            <h4>{title.toUpperCase()}</h4>
          </div>
        </div>
      </div>
      {isModalVisible && pokemonDetails && (
        <StatsModal pokemonDetails={pokemonDetails} handleClick={handleClick}/>
      )}
    </div>
  );
};

export default CustomCard;
