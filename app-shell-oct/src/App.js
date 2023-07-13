import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import { HomePage } from './login/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
