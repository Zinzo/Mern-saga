import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  boardActions,
} from '../../../state/board';

const BoardViewContainer = props => {
  // props로 받아온 값 저장
  const {
    datas
  } = props;

  return (
    <div className='container'>
      <div className="row">
        <div className="col-3">{datas.name}</div>
        <div className="col-3">{datas.port}</div>
        <div className="col-3">{datas.datas}</div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      datas: state.board.datas
  }
}

export default connect(
  mapStateToProps,
  null
)(BoardViewContainer);
