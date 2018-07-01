import { createSelector } from 'reselect';

function boardSelector(state){
  return state.datas;
}

export const boardListSelector = createSelector(
  boardSelector,
  (datas = {}) => {
    return{
      id: datas._id,
      name: datas.name,
    }
  }
)