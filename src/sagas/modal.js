import { 
    put,
    call , 
    all, 
    takeEvery,  
  } from 'redux-saga/effects';
  
  import { 
    modalTypes, 
    modalActions,
  } from '../state/modal';
  
  export function* getModalOpen(action) {
    yield put({ type : 'OPEN_MODAL' });
  }

  export function* getModalClose(action) {
    yield put({ type : 'CLOSE_MODAL' });
  }
  
  export function* watchModalActions() {
    yield all([
      takeEvery(modalTypes.OPEN_MODAL, getModalOpen),
      takeEvery(modalTypes.CLOSE_MODAL, getModalOpen)
    ]) 
  }