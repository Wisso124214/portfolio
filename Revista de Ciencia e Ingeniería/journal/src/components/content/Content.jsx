import { ScrollArea } from "@/components/ui/scroll-area"
import './Content.css';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import Result from "./result/Result";

const Content = ({ props }) => {

  const { data, searchText, categorySelected, setTagSelected, setCategorySelected, setSearchText, setFilterBy, setTitleCategorySelected, titleCategorySelected, categories, filterBy, tagSelected } = props;

  const errMessage = {
    propSelected: 'Lo sentimos. No se encontraron resultados para filtrar por "',
    searchText: 'Lo sentimos. No se encontraron resultados coincidencias para "'
  }

  const [width, setWidth] = useState(globalThis.visualViewport.width)
  const [hoverStyle, setHoverStyle] = useState({ color: '#fff', backgroundColor: '#444' });

  useEffect(()=>{
    setInterval(()=>{
      setWidth(globalThis.visualViewport.width)
    },500)
  },[])

  useEffect(() => {
    setFilterData(updateAllData(data));
  }, [data])


  const updateAllData = (data) => {
    return data.map((item, index) => {
      const propsResult = {item, index, categories, setFilterBy, setTitleCategorySelected, setCategorySelected, setSearchText, setTagSelected, filterBy }
      return (
        <Result props={propsResult} key={index} />
      )
    })
  }

  const [filterData, setFilterData] = useState(updateAllData(data));
  
  //on useEffect filter data by search text and print quantity of results
  useEffect(() => {
    let newFilterData;
    if(categorySelected !== '' && filterBy === 'categorySelected') {

      newFilterData = data.filter(item => item[titleCategorySelected]===categorySelected).map((item, index) => {
        const propsResult = {item, index, categories, setFilterBy, setTitleCategorySelected, setCategorySelected, setSearchText, setTagSelected, filterBy }
        return (
          <Result props={propsResult} key={index} />
        )});
      setFilterData(newFilterData);
    }
    else if (tagSelected !== '' && filterBy === 'tagSelected') {

      newFilterData = data.filter(item => item.tags.includes(tagSelected)).map((item, index) => {
        const propsResult = {item, index, categories, setFilterBy, setTitleCategorySelected, setCategorySelected, setSearchText, setTagSelected, filterBy }
        return (
          <Result props={propsResult} key={index} />
        )});
        setFilterData(newFilterData);
    } else if (searchText || searchText === '') {

      newFilterData = data.filter(item => searchText !== '' && filterBy === 'searchText' ? item.title.toLowerCase().includes(searchText.toLowerCase()): true).map((item, index) => {
        const propsResult = {item, index, categories, setFilterBy, setTitleCategorySelected, setCategorySelected, setSearchText, setTagSelected, filterBy }
        return (
          <Result props={propsResult} key={index} />
        )});
        setFilterData(newFilterData);
    }
    
  }, [searchText, categorySelected, tagSelected, filterBy]);

  return (
    <ScrollArea id='content-scroll'>
      {
        <div id='header-content-scroll' >{
            filterData.length > 0 ? 
            (filterData.length < data.length ? <p className="ml-8 mt-2">Se encontraron {filterData.length} resultados</p>  : null) : 
            <p className="ml-8 mt-2"> {searchText === '' ? errMessage.propSelected+categorySelected : errMessage.searchText+searchText}". </p> 
          }
          {filterData.length < data.length ? 
            <Button 
              variant="outline" 
              className='px-4' 
              style={{ color: hoverStyle.color, backgroundColor: hoverStyle.backgroundColor }}
              onMouseEnter={() => setHoverStyle({ color: '#444', backgroundColor: '#fff' })}
              onMouseLeave={() => setHoverStyle({ color: '#fff', backgroundColor: '#444' })}
              onClick={() => {
                setCategorySelected(''); 
                setSearchText(''); 
                document.getElementById('searcher').value = '';
                setTagSelected('');
                setFilterBy('');
              }}
            >{width > 600 ? 'Mostrar todos los resultados' : 'Todos'}</Button> : null }
        </div>
      }
      {
        filterData
      }
      
    </ScrollArea>
  );
}

export default Content;