import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

import { 
  boardActions,
} from '../../../state/board';

const BoardList = (props) => {
const {
    datas,
    isFetching,
    fetchGetBoardViewRequest
  } = props;

let Id = datas._id;

if(isFetching){
    return(
      <div>testtest11123testetsetestetest</div>
    )
  } else {
      return(
        <div className='col-3'>
          <Link to={`/view/${Id}`} onClick={() => fetchGetBoardViewRequest(Id)}>
            Name: {datas.name}
          </Link>
        </div>
      )
  }
  return null;
}

const mapDispatchToProps = (dispatch) => {
  // 즉시 실행 (액션)
  return{
    fetchGetBoardViewRequest : (Id) => dispatch(boardActions.fetchGetBoardViewRequest( Id ))
  }
}

export default connect(
  null, 
  mapDispatchToProps,
)(BoardList);