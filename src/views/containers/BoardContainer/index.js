import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardList from '../../components/Board/BoardList';
import { 
  boardActions,
  boardSelectors,
} from '../../../state/board';

import { 
  modalActions
} from '../../../state/modal';


import Modal from 'react-modal';

// class BoardListContainer extends Component{
//   componentWillMount() {
//     const {
//       fetchGetBoardListRequest,
//       datas
//         } = this.props;

//         console.log(this.props);
      
//         fetchGetBoardListRequest()
//   }

//   render(){
//     return (
//           <div>
//             <div>
//               <BoardList/>
//           </div>
//           </div>
//         )
//   }
// }


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
      (datas , i ) =>  (<BoardList key={i} datas={datas} />)
    )
  }

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  const test = true;
 
  return (
    <div>
      {BoardListUP}
      
      <div>
        <button onClick={()=>fetchOpenModal()}>
          글쓰기
        </button>
      </div>

      <Modal
          isOpen={isModalOpen}
          contentLabel="Example Modal"
        >

          testtesttesttest

          <button onClick={()=>fetchCloseModal()}>
            closeModal
          </button>
        </Modal>

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
