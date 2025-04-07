import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderCon from './containers/HeaderCon';
import LoginCon from './containers/LoginCon';
import ListPage from './pages/ListPage';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <div className="App">
      <HeaderCon />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/login" element={<LoginCon />} />
      </Routes>
    </div>
  );
}

export default App;
