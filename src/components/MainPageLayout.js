import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Movie Booth"
        subtitle="Searching for any movie, show or an actor?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;