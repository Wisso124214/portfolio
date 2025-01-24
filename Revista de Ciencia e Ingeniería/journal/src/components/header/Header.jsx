import './Header.css';
import Menu from '@/components/menu/Menu.jsx';
import { ButtonUser } from './buttonUser/ButtonUser';
import { Input } from "@/components/ui/input"
import Logo from '@/components/header/logo/Logo.jsx';
import { useEffect } from 'react';

const Header = ({ props }) => {

  const { setSearchText, setCategorySelected, categories, userColor, setTitleCategorySelected, tags, searchText, setFilterBy, filterBy, setTagSelected } = props;

  const propsMenu = {
    categories,
    setCategorySelected,
    setTitleCategorySelected,
    tags,
    setFilterBy,
    setTagSelected,
  }

  useEffect(()=>{
    (filterBy !== 'searchText' && document.getElementById('searcher')) ? document.getElementById('searcher').value = '' : null
  },[filterBy])

  return (
    <div className='header' >
      <Logo  />
      <Menu props={propsMenu} />

      <div className='search'>
        <div className='search-input'>
          <svg width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          <Input 
            id="searcher"
            className="w-36 mr-12 ml-2 bg-white"
            type="text"
            placeholder="Buscar"
            onChange={(e) => { 
              if (e.target.value.length > 2) {
                setSearchText(e.target.value)
                setFilterBy('searchText')
              } else {
                setFilterBy('')
                setSearchText('')
              }
            }} />
        </div>
        <ButtonUser userColor={userColor} />
      </div>
    </div>
  );
}

export default Header;