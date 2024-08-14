import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
// import Header from './components/header/Header'
import HeaderProvider from './components/headerProvider/HeaderProvider'

function App() {
  return (
    <HeaderProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemon/:id"
          element={<Details noscroll/>} />
      </Routes>
    </HeaderProvider>
  )
}

export default App;

