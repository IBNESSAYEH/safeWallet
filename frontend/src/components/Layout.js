import React from 'react';
import Header from './Header';
import link, { Link, Outlet } from 'react-router-dom';

const Home = () => {
  
  const username = "soufiane boushaba";

  return (
    <>
      <Header />
     
     <Outlet></Outlet>
    </>
  );
}

export default Home;
