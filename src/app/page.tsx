import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      Home
      <hr></hr>
      <Link href="/login">login</Link>
    </div>
  );
};

export default Home;
