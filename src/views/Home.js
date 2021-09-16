import React from 'react';

import Banner from '../components/Banner';
import CardList from '../components/CardList';
import CenteredButton from '../components/CenteredButton';
import CreditCard from '../components/CreditCard';
import Institutional from '../components/Institutional';
import Faq from '../components/Faq';

import posts from '../data/posts';

const Home = ({ handelClick }) => (
    <>
      <Banner />

      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton onCLick={handelClick}>
        Abra sua conta
      </CenteredButton>

      <Institutional />
      <Faq />
    </>
  );

export default Home;
