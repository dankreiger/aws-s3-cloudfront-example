import React from 'react';
import { AppWrapper } from './App.styles';
import AppRoutes from 'routes/AppRoutes';
import { Link } from 'react-router-dom';
function App() {
  return (
    <AppWrapper>
      <Link to="/" style={{ marginRight: '20px' }}>
        Home
      </Link>
      <Link to="/about">About</Link>
      <AppRoutes />
    </AppWrapper>
  );
}
export default App;
