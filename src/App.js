import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './Pages/Categories';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
