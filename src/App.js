import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import MyNotices from './components/MyNotices';

function App() {
  return (
    <div className="App">
      <h1>Notice Application</h1>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/my-notice" element={<MyNotices/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
