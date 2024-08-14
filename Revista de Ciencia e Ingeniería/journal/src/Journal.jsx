import { useEffect, useState } from 'react'
import Header from './components/header/Header.jsx'
import Content from './components/content/Content.jsx'
import { data } from './lib/simulateDataAPI.js'
import './Journal.css'

function App() {

  const [searchText, setSearchText] = useState('');
  const [propSelected, setPropSelected] = useState('')

  const dataAdded = data.map((item, index)=>{
    let newItem = JSON.parse(JSON.stringify(item))
    newItem.author = 'Autor 1'

    return index < 11 ? newItem : item
  })
  
  useEffect(()=>{
    if(propSelected !== ''){
      document.getElementById('searcher').value = ''
      setSearchText('')
    }
  },[propSelected])

  useEffect(()=>{
    if(searchText !== '')
      setPropSelected('');
  },[searchText])

  return (
    <>
      <Content searchText={searchText} data={dataAdded} propSelected={propSelected} setPropSelected={setPropSelected} setSearchText={setSearchText} />
      <Header setSearchText={setSearchText} setPropSelected={setPropSelected} />
    </>
  )
}

export default App
