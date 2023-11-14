import Home from './components/Home.jsx';
import ListItems from './components/ListItems.jsx';
import Item from './components/Item.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="home" element={<Home/>} />
      <Route path="listItems" element={<ListItems/>} />
      <Route path="item/:id" element={<Item/>} /> 
      {/* <Route path="*" element={<NotFoundPage/>} /> */}
    </Routes>
    </BrowserRouter>

  )
}

export default App