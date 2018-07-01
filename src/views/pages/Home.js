import React from 'react';

import PageTitle from '../components/PageTitle';
import PageDescription from '../components/PageDescription';
import UserContainer from '../containers/UserContainer';
import BoardListContainer from '../containers/BoardContainer';

function HomePage(props){
  return(
    <div>
      <PageTitle 
        title={'Home Page'}
      />
      <PageDescription 
        description={'Home Page Description'}
      />
      {/*
      */}
      <UserContainer/>
      <BoardListContainer />
    </div>
  )
}

export default HomePage;