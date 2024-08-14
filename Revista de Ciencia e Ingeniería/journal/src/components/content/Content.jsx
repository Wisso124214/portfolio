import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import './Content.css';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"

const Content = ({ data, searchText, propSelected, setPropSelected, setSearchText }) => {

  const allData = data.map((item, index) => {
    return (
      <div key={index} className="content-item">
        <TooltipProvider >
          <Tooltip >
            <TooltipTrigger className='text-left hover:underline'>
              <h2>{item.title}</h2>
            </TooltipTrigger>
            <TooltipContent>
              <p>{item.url}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <p>{item.date + ' -- ' + item.description}</p>
      </div>
    )
  })
  
  const errMessage = {
    propSelected: 'Lo sentimos. No se encontraron resultados para filtrar por "',
    searchText: 'Lo sentimos. No se encontraron resultados coincidencias para "'
  }

  const [filterData, setFilterData] = useState(allData);

  //on useEffect filter data by search text and print quantity of results
  useEffect(() => {
    let filterData;
    if(propSelected!==''){
      filterData = data.filter(item => item.author===propSelected).map((item, index) => {
        return (
          <div key={index} className="content-item">
            <TooltipProvider >
              <Tooltip >
                <TooltipTrigger className='text-left hover:underline'>
                  <h2>{item.title.split(' ').map(w=>
                    w.toLowerCase().includes(searchText.toLowerCase()) && searchText.length > 1 ? '«'+w+'»' : w
                    ).join(' ')}</h2>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.url}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <div className="flex flex-col">
              <div className="flex flex-row m-2 ml-4">
                {item.date ? <p className="cont-item-data" >{item.date}</p> : null}
                {item.author ? <p className="cont-item-data" >{item.author}</p> : null}
              </div>
              <p className="text-lg mt-1" >&emsp;{item.description}</p>
              <div className="separator"></div>
            </div>
          </div>
        )});
      setFilterData(filterData);
    }
    else if (searchText || searchText === '') {
      filterData = data.filter(item => searchText!=='' ? item.title.toLowerCase().includes(searchText.toLowerCase()): true).map((item, index) => {
        return (
          <div key={index} className="content-item">
            <TooltipProvider >
              <Tooltip >
                <TooltipTrigger className='text-left hover:underline'>
                  <h2>{item.title.split(' ').map(w=>
                    w.toLowerCase().includes(searchText.toLowerCase()) && searchText.length > 1 ? '«'+w+'»' : w
                    ).join(' ')}</h2>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.url}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <div className="flex flex-col">
              <div className="flex flex-row m-2 ml-4">
                {item.date ? <p className="cont-item-data" >{item.date}</p> : null}
                {item.author ? <p className="cont-item-data" >{item.author}</p> : null}
              </div>
              <p className="text-lg mt-1" >&emsp;{item.description}</p>
              <div className="separator"></div>
            </div>
          </div>
        )});
        setFilterData(filterData);
      }
  }, [searchText, propSelected]);

  return (
    <ScrollArea className="content">
      {
        <div className="flex flex-row w-full justify-between ">{
            filterData.length > 0 ? 
            (filterData.length < data.length ? <p className="ml-8 mt-2">Se encontraron {filterData.length} resultados</p>  : null) : 
            <p className="ml-8 mt-2"> {searchText === '' ? errMessage.propSelected+propSelected : errMessage.searchText+searchText}". </p> 
          }
          {filterData.length < data.length ? <Button variant="outline" onClick={()=>{setPropSelected(''); setSearchText(''); document.getElementById('searcher').value = ''}}>Mostrar todos los resultados</Button> : null}
        </div>
      }
      {
        filterData
      }
      
    </ScrollArea>
  );
}

export default Content;