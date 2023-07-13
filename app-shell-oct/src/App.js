import React, { Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './login/HomePage';
import Login from './login/Login';
const AdminApp = React.lazy(() => import('admin/App'));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/reception-list" element={<Suspense fallback="Loading App1..."><AdminApp /></Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
