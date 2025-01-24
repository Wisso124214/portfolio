import { useEffect, useState } from 'react'
import Header from './components/header/Header.jsx'
import Content from './components/content/Content.jsx'
import { data } from './lib/simulateDataAPI.js'
import './Journal.css'

function App() {

  const [searchText, setSearchText] = useState('');
  const [categorySelected, setCategorySelected] = useState('');             //Autor 1, Autor 2, Autor 3...
  const [titleCategorySelected, setTitleCategorySelected] = useState('');   //autores or temas
  const [tagSelected, setTagSelected] = useState('');                       //investigaciones or novedades
  const [filterBy, setFilterBy] = useState('');                             //searchText, categorySelected, tagSelected
  const [updatedData, setUpdatedData] = useState(data);

  const userColor = '#000000';
  const categories = {
    autores: ['Autor 1', 'Autor 2', 'Autor 3'],
    temas: ['Tema 1', 'Tema 2', 'Tema 3',],
  };

  const tags = ['investigaciones', 'novedades',];

  
  useEffect(()=>{
    setUpdatedData(
      data.map((item, index)=>{
        let newItem = JSON.parse(JSON.stringify(item))
        let newTags = []

        for (let d in categories) 
          newItem[d] = categories[d][(Math.random() * (categories[d].length - 1)).toFixed(0)];
        
        for (let t of tags) {
          (Math.random() * (tags.length - 1)).toFixed(0) > 0 ? newTags.push(t) : null
        }

        newItem.tags = newTags
        return newItem ;
      }).sort((a,b)=>a.date < b.date ? 1 : -1)
    )
  },[])
  
  const props = {
    content: {
      data: updatedData,
      searchText,
      categorySelected,
      setCategorySelected,
      setSearchText,
      setTitleCategorySelected,
      setFilterBy,
      setTagSelected,
      titleCategorySelected,
      categories,
      filterBy,
      tagSelected,
    },
    header: {
      setSearchText,
      searchText,
      setCategorySelected,
      categories,
      userColor,
      setTitleCategorySelected,
      tags,
      setFilterBy,
      filterBy,
      setTagSelected,
    },
  }

  return (
    <>
      <Content props={props.content} />
      <Header props={props.header} />
    </>
  )
}

export default App
