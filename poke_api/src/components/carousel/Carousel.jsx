import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = ({ pokemonId, colors }) => {
  const [sprites, setSprites] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(2);
  let divCarousel = useRef();

  const msRefresh = 100;
  const [widthClient, setWidthClient] = useState(window.innerWidth)
  
  useEffect(()=>{
    isWidthChanged()
  },[])

  function isWidthChanged(){
    setInterval(() => {
      if(window.innerWidth !== widthClient){
        setWidthClient(window.innerWidth)
        if(divCarousel.current){
          //divCarousel.current.style.display = 'flex';
          
          window.innerWidth <= 1360 && window.innerWidth > 1000  ? divCarousel.current.style.left = (window.innerWidth - divCarousel.current.offsetWidth)/2.1 + 'px' :
          window.innerWidth <= 1000 && window.innerWidth >  800 ? divCarousel.current.style.left = (window.innerWidth - divCarousel.current.offsetWidth)/2.3 + 'px' :
          window.innerWidth <=  800 && window.innerWidth >  750 ? divCarousel.current.style.left = (window.innerWidth - divCarousel.current.offsetWidth)/2.5 + 'px' :
          window.innerWidth <=  750 && window.innerWidth >  700 ? divCarousel.current.style.left = (window.innerWidth - divCarousel.current.offsetWidth)/2.7 + 'px' :
          window.innerWidth <=  700 && window.innerWidth >  650 ? divCarousel.current.style.left = (window.innerWidth - divCarousel.current.offsetWidth)/3 + 'px' :
          window.innerWidth <=  650 && window.innerWidth >  600 ? divCarousel.current.style.left = (window.innerWidth - divCarousel.current.offsetWidth)/3.25 + 'px' :
          window.innerWidth <=  600 && window.innerWidth >  550 ? divCarousel.current.style.left = (window.innerWidth - divCarousel.current.offsetWidth)/4 + 'px' :
          window.innerWidth <=  550 && window.innerWidth >  500 ? divCarousel.current.style.left = (window.innerWidth - divCarousel.current.offsetWidth)/4.5 + 'px' :
          window.innerWidth <=  500 && window.innerWidth >  475 ? divCarousel.current.style.left = (window.innerWidth - divCarousel.current.offsetWidth)/6 + 'px' :
          window.innerWidth <=  475 ? divCarousel.current.style.left = (window.innerWidth - divCarousel.current.offsetWidth)/8 + 'px' : '';
          window.innerWidth <=  450 ? divCarousel.current.style.display = 'none' : divCarousel.current.style.display = 'flex';
        }
      }
    }, msRefresh);
  }

  useEffect(() => {
    const fetchSprites = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      const spriteUrls = extractSprites(data.sprites);
      setSprites(spriteUrls);
    };

    fetchSprites();
  }, [pokemonId]);

  const extractSprites = (spritesObj) => {
    const urls = [];
    const extract = (obj) => {
      for (const key in obj) {
        if (typeof obj[key] === 'string' && obj[key]) {
          urls.push(obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          extract(obj[key]);
        }
      }
    };
    extract(spritesObj);
    return urls;
  };

  const nextSprite = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sprites.length);
  };

  const prevSprite = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sprites.length) % sprites.length);
  };

  return (
    <div className="carousel" ref={divCarousel}
      onMouseEnter={()=>{
        const arrIcons = document.getElementsByClassName('arr-icons');
        Array.from(arrIcons).forEach(icon => {
          icon.getElementsByTagName('path')[0].style.stroke = colors.textArrws;
        });
      }} 
      
      onMouseLeave={()=>{
        const arrIcons = document.getElementsByClassName('arr-icons');
        Array.from(arrIcons).forEach(icon => {
          icon.getElementsByTagName('path')[0].style.stroke = 'transparent';
        });
      }}
    >
      <div className="arr-icons" onClick={prevSprite}>
        <svg className='arr-left' xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 128 128" id="arrows-button-to-right"><path stroke="#000" strokeLinecap="round" strokeWidth="5" d="M65 86L83.9239 66.646C85.6338 64.8972 85.6338 62.1028 83.9239 60.354L65 41M50 86L50 41"></path></svg>
      </div>
      {sprites.length > 0 && (
        <img src={sprites[currentIndex]} alt="Pokemon Sprite" className="carousel-image" />
      )}
      <div className="arr-icons" onClick={nextSprite}>
        <svg className='arr-right' xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 128 128" id="arrows-button-to-right"><path stroke="#000" strokeLinecap="round" strokeWidth="5" d="M65 86L83.9239 66.646C85.6338 64.8972 85.6338 62.1028 83.9239 60.354L65 41M50 86L50 41"></path></svg>
      </div>
    </div>
  );
};

export default Carousel;