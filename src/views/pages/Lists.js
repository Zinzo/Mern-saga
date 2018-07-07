import React from 'react';

import PageTitle from '../components/PageTitle';
import PageDescription from '../components/PageDescription';
import BoardListContainer from '../containers/BoardContainer';

function ListsPage(props){
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
      <BoardListContainer />
    </div>
  )
}

export default ListsPage;