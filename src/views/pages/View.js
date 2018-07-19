import React from 'react';

import PageTitle from '../components/PageTitle';
import PageDescription from '../components/PageDescription';
import BoardViewContainer from '../containers/BoardViewContainer';

function ViewPage(props){
  // param 값 전송
  const param = props.match.params;

  return(
    <div>
      <PageTitle 
        title={'Home Page'}
      />

      <PageDescription 
        description={'Home Page Description'}
      />

      <BoardViewContainer param = {param}/>
    </div>
  )
}

export default ViewPage;