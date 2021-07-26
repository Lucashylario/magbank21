import React from 'react';
import "./App.scss";
import Banner from './components/Banner';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import CreditCard from './components/CreditCard';
import Navbar from './components/Navbar';
import Institutional from './components/Institutional';

import posts from './data/posts';

const App = () => (
    <div className="App">
      <Navbar />
      <Banner />

      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>Abra sua conta</CenteredButton>

      <Institutional />
    </div>
);


export default App;
