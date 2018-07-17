import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardList from '../../components/Board/BoardList';
import { 
  boardActions,
  boardSelectors,
} from '../../../state/board';

import BoardModal from '../../components/Modal/BoardModal'

import { modalActions } from '../../../state/modal';

const BoardListContainer = props => {
  // props로 받아온 값 저장
  const {
    fetchGetBoardListRequest,
    datas,
    isFetching,
    fetchOpenModal,
    isModalOpen,
    fetchCloseModal,
  } = props;

  // Map 돌릴 변수 초기값 설정
  let BoardListUP = [];

  // Map 돌리기 전 예외 처리 및 변수에 담기
  if (datas.BoardDatas.length>0){
    BoardListUP = datas.BoardDatas.map(
      (datas , i ) =>  (<BoardList key={i} datas={datas} isFetching={isFetching}  />)
    )
  }

  return (
    <div className='container'>
      <div className="row">
        {BoardListUP}
      </div>
      
      <BoardModal datas={props}/>

      <div>
        <button onClick={()=>fetchOpenModal()}>
          글쓰기
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      datas: boardSelectors.boardListSelector(state),
      isFetching: state.board.isFetching,
      isModalOpen : state.modal.isOpenModal
  }
}

const mapDispatchToProps = (dispatch) => {
  // 즉시 실행 아닐때 (액션)
  // return {
  //   fetchGetBoardListRequest: () => {
  //       dispatch(boardActions.fetchGetBoardListRequest());
  //   }
  // }
  
  // 즉시 실행 (액션)
  return(
    dispatch(boardActions.fetchGetBoardListRequest()),
    {
      fetchOpenModal: () => {
        dispatch(modalActions.fetchOpenModal());
      },

      fetchCloseModal: () => {
        dispatch(modalActions.fetchCloseModal());
      }

    }
  )
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(BoardListContainer);
