import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <h1>Welcome to main page</h1>
    <Link to="/greeting">Click to generate random message</Link>
  </>
);

export default Home;
