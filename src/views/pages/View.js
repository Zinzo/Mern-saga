import React from 'react';

import PageTitle from '../components/PageTitle';
import PageDescription from '../components/PageDescription';
import BoardViewContainer from '../containers/BoardViewContainer';

function ViewPage(props){
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
      <BoardViewContainer/>
    </div>
  )
}

export default ViewPage;