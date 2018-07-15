import * as types from './types';

export const fetchGetBoardListRequest = () => {
  return { 
    type: types.FETCH_GET_BOARDLIST,
  }
}

// export const fetchGetBoardLoading = ( datas ) => {
//   return { 
//     type: types.FETCH_GET_BOARDLOADING,
//     ...datas ,
//   }
// }  

export const fetchGetBoardListSuccess = ( datas ) => {
  return {
    type: types.FETCH_GET_BOARDLIST_SUCCESS,
    payload:  datas ,
  }
}


// 리덕스 시도중
// export const fetchGetBoardCreateRequest = () => {
//   return { 
//     type: types.FETCH_GET_BOARDCREATE,
//   }
// }

// export const fetchGetBoardCreateSuccess = ( datas ) => {
//   return { 
//     type: types.FETCH_GET_BOARDCREATE,
//     payload: datas,
//   }
// }