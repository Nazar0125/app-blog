import React from 'react';
import './App.scss';
import Aside from './components/aside';
import Header from './components/header';
import { RouterConfig } from './navigation/routerConfig';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Aside />
        <RouterConfig />
      </main>
    </div>
  );
}

export default App;