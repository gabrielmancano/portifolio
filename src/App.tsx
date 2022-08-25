import React from 'react';
import { About } from './pages/About';
import TodoApp from './pages/Todo';
import Adot from './pages/Adot';
import Cookies from './pages/Cookies';
import LandingPage from './pages/LandingPage';
import MyShoes from './pages/MyShoes';

function App() {
  return (
    <>
      <About />
      <TodoApp />
      <Adot />
      <MyShoes />
      <Cookies />
      <LandingPage />
    </>
  );
}

export default App;
