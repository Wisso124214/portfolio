import { createContext, useEffect, useState } from "react";
import { router } from "@/App2";

export const LinksContext = createContext();

export default function LinksProvider({ children }){
  const [links, setLinks] = useState(["/"])
  let newArr = [...links]

  useEffect(()=>{
    for(let r in router.routes){
      if(!isExistOnArray(links, router.routes[r].path) && router.routes[r].path!==undefined){
        newArr = [...newArr,router.routes[r].path]
        setLinks(newArr);
      }
    }

    function isExistOnArray(arr, e){
      for(let a in arr){
        if(arr[a]===e)
          return true;
      }
      return false;
    }
  },[router])

  return(
    <LinksContext.Provider value={ { links, setLinks } } >      
        { children }
    </LinksContext.Provider>
  )
}