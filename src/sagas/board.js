import { 
    put,
    call , 
    all, 
    take,
    takeEvery,  
  } from 'redux-saga/effects';
  
  import { delay } from 'redux-saga'

  import { 
    boardTypes, 
    boardActions,
  } from '../state/board';
  
  import { 
    fetchBoardList,
    fetchBoardLoading,
    fetchBoardCreate,
    fetchBoardView,
  } from '../apis/board';
  
  export function* getBoardList(action) { 
    const response = yield call(fetchBoardList);
    yield put(boardActions.fetchGetBoardListSuccess(response));
  }

  export function* getBoardCreate(action) {
    yield call(fetchBoardCreate,action.payload);
    yield call(getBoardList);
    yield delay(500);
    yield put({ type : 'modal/CLOSE_MODAL' });
  }

  export function* getBoardView( action ) {
    const response = yield call(fetchBoardView,action.payload);
    yield put(boardActions.fetchGetBoardViewSuccess(response));
  }

  // export function* getBoardLoading(action) {
  //   const response = action;
  //   yield call(fetchBoardLoading);
  //   yield put(boardActions.fetchGetBoardListSuccess(response));
  // }
  
  export function* watchBoardActions() {
    yield all([
      takeEvery(boardTypes.FETCH_GET_BOARDLIST, getBoardList),
      takeEvery(boardTypes.FETCH_GET_BOARDCREATE, getBoardCreate),
      takeEvery(boardTypes.FETCH_GET_BOARDVIEW, getBoardView),
      // takeEvery(boardTypes.FETCH_GET_BOARDLOADING, getBoardLoading)
    ])
  }