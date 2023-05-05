import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './Pages/Categories';
import Home from './Pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
