import React, { useContext, useEffect, useRef } from 'react';
import './Header.css'
// import pokelogo from '../../assets/pokelogo.png'
import { useNavigate } from 'react-router-dom';
import { HeaderContext } from '../headerProvider/HeaderProvider';

const Header = ({ children, style, pokelogo }) => {
  
  const { setHeader } = useContext(HeaderContext);
  const thisHeader = useRef();
  const navigate = useNavigate();
  
  useEffect(()=>{
    setHeader(thisHeader.current);
  },[thisHeader.current])

  const handleClick = ()=> navigate('/');
  
  return (
    <div ref={thisHeader} className='header-body' style={style} >
      {/*<h1 className='title-header'>{title}</h1>*/}
      <img className='logo' src={pokelogo} onClick={handleClick} />
      {children}
    </div>
  );
};

export default Header;