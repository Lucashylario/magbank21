import React from 'react';
import "./App.scss";
import Banner from './components/Banner';
import CreditCard from './components/CreditCard';
import Navbar from './components/Navbar';
//import CardList from './components/CardList';

//import posts from './data/posts';

const App = () => (
    <div className="App">
      <Navbar />
      <Banner />

      <CreditCard />
    </div>
);
//<CenteredButton>Abra sua conta</CenteredButton>
//<CardList posts={posts} />

export default App;
