import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  boardActions,
  boardSelectors,
} from '../../../state/board';

import BoardView from '../../components/BoardView/BoardView'

const BoardViewContainer = props => {
  // props로 받아온 값 저장
  const {
    datas,
  } = props;

  return (
      <BoardView datas ={datas}/>
    )
  
}


const mapStateToProps = (state) => {
  return {
      datas: boardSelectors.boardListSelector(state),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  const Id = props.param.id;
  return(
    dispatch(boardActions.fetchGetBoardViewRequest( Id ))
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardViewContainer);
