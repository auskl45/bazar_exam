import Home from './components/Home.jsx'
import ListItems from './components/ListItems.jsx';
import Item from './components/Item.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="listemItems" element={<ListItems/>} />
      <Route path="item" element={<Item/>} />
      {/* <Route path="users" element={<Users/>} />
      <Route path="/redirect" element={<Navigate replace to="/users" />} />
      <Route path="user/:id" element={<UserPage/>} /> */}

      {/* <Route path="dashboard/*" element={<Dashboard/>} >
        <Route path="wellcome" element={<h3>Wellcome!!</h3>} />
      </Route> */}

      {/* <Route path="*" element={<NotFoundPage/>} /> */}
    </Routes>
    </BrowserRouter>

  )
}

export default App