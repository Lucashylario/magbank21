import React, {useState} from 'react';
import "./App.scss";
import Banner from './components/Banner';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import CreditCard from './components/CreditCard';
import Navbar from './components/Navbar';
import Institutional from './components/Institutional';

import posts from './data/posts';
import Faq from './components/Faq';
import Footer from './components/Footer';
import AccountModal from './components/AccountModal';

const App = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div className="App">
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <Banner />

      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>Abra sua conta</CenteredButton>

      <Institutional />
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};


export default App;
