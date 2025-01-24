import MenuMobile from './menuMobile/MenuMobile';
import MenuPc from './menuPc/MenuPc';
import './Menu.css';

const Menu = ({ props }) => {
  
  return(
    <>
      <MenuPc props={props} />
      <MenuMobile props={props} />
    </>
  )
}

export default Menu;