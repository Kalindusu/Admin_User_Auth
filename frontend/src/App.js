
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
