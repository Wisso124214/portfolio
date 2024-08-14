import { createContext, useState } from "react"
import '../../index.css'
import Details from "../../pages/Details";
export const HeaderContext = createContext(null);

const HeaderProvider = ({ children })=>{

  let [header, setHeader] = useState(HeaderContext);
  const [num, setNum] = useState(0)
  

  return(
    <HeaderContext.Provider value={ { header, setHeader } } >
      { children }
    </HeaderContext.Provider>
  )
}

export default HeaderProvider;