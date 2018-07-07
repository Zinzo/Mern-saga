import * as types from './types';

export const fetchGetBoardListRequest = () => {
  return { 
    type: types.FETCH_GET_BOARDLIST,
  }
}  

export const fetchGetBoardListSuccess = ( datas ) => {
  return {
    type: types.FETCH_GET_BOARDLIST_SUCCESS, 
    payload:  datas ,
  }
}