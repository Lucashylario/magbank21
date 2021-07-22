import React from 'react';
import "./App.scss";
import Banner from './components/Banner';
import CardList from './components/CardList';
import CreditCard from './components/CreditCard';
import Navbar from './components/Navbar';

import posts from './data/posts';

const App = () => (
    <div className="App">
      <Navbar />
      <Banner />

      <CreditCard />
      <CardList posts={posts} />
    </div>
);
//<CenteredButton>Abra sua conta</CenteredButton>


export default App;
