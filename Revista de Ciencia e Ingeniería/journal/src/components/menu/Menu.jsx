import { useEffect, useRef } from 'react';
import './Menu.css';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

const Menu = ({ dataOptions, setPropSelected }) => {
  
  return (
    <Menubar>
      {
        Object.keys(dataOptions).map((option, index) => (
          <MenubarMenu key={index+'bar'} className=' '  >
            <MenubarTrigger key={index+'trigger'} className='capitalize px-8 ' >{option}</MenubarTrigger>
            <MenubarContent key={index+'cont'} className='flex flex-col py-4 px-1' >
              {dataOptions[option].map((item, index) => (
                <MenubarItem className='py-1 text-center cursor-pointer hover:bg-f5 rounded-md pl-4 ' key={index} onClick={()=>setPropSelected(item)}>{item}</MenubarItem>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ))
      }
    </Menubar>
  );
}

export default Menu;