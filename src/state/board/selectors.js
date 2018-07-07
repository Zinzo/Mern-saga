import { createSelector } from 'reselect';

function boardSelector(state){
  return state.board.datas;
}

export const boardListSelector = createSelector(
  boardSelector,
  (datas = {}) => {
    return{
      BoardDatas: datas
    }
  }
)