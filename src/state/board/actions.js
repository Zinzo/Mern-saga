import * as types from './types';

// export const fetchGetBoardLoading = ( datas ) => {
//   return { 
//     type: types.FETCH_GET_BOARDLOADING,
//     ...datas ,
//   }
// }  

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

export const fetchGetBoardViewRequest = ( datas ) => {
  return{
    type: types.FETCH_GET_BOARDVIEW,
    payload: datas ,
  }
}

export const fetchGetBoardViewSuccess = ( datas ) => {
  return {
    type: types.FETCH_GET_BOARDVIEW_SUCCESS,
    payload:  datas ,
  }
}

export const fetchGetBoardCreateRequest = ( datas ) => {
  return { 
    type: types.FETCH_GET_BOARDCREATE,
    payload: datas
  }
}

// export const fetchGetBoardCreateRequest = ( datas, dispatch ) => {
//   return { 
//     type: types.FETCH_GET_BOARDCREATE,
//     payload: datas,
//     dispatch: dispatch
//   }
// }