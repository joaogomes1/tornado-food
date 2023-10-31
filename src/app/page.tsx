import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      Home
      <Link href="/login" className="hover:underline hover: text-blue-500">
        login
      </Link>
    </div>
  );
};

export default Home;
