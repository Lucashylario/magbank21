import React from 'react';
import "./App.scss";
import Banner from './components/Banner';
import Navbar from './components/Navbar';

const App = () => (
    <div className="App">
      <Navbar />
      <Banner />
    </div>
);

export default App;
