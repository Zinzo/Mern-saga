import React from 'react';
import { connect } from 'react-redux';

import BoardList from '../../components/Board/BoardList';
import { 
  boardActions,
  boardSelectors,
} from '../../../state/board';

const BoardListContainer = props => {
  const {
    fetchGetBoardListRequest
  } = props;
  
  console.log("BoardListContainer", props);

  return (
    <div>
      <div>
      <button onClick={()=>fetchGetBoardListRequest()}>
        User 1
        </button>
        <BoardList />
    </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
      datas: boardSelectors.boardListSelector(state),
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchGetBoardListRequest: props => {
        dispatch(boardActions.fetchGetBoardListRequest(props));
    }
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(BoardListContainer);
