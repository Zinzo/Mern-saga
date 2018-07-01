import { 
    put,
    call , 
    all, 
    takeEvery,  
  } from 'redux-saga/effects';
  
  import { 
    boardTypes, 
    boardActions,
  } from '../state/board';
  
  import { 
    fetchBoardList
  } from '../apis/board';
  
  export function* getBoardList(action) {
    const response = yield call(fetchBoardList);
    yield put(boardActions.fetchGetBoardListSuccess(response));
  }
  
  export function* watchBoardActions() {
    yield all([
      takeEvery(boardTypes.FETCH_GET_BOARDLIST, getBoardList)
    ])
  }