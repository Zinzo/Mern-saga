import * as types from './types';

export function fetchGetBoardListRequest(datas){
  return { 
    type: types.FETCH_GET_BOARDLIST, 
    payload: { datas }
  }
}  

export function fetchGetBoardListSuccess(datas){
  return {
    type: types.FETCH_GET_BOARDLIST_SUCCESS, 
    payload: { datas },
  }
}