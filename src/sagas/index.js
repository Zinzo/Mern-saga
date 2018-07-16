import { all } from 'redux-saga/effects'
import { watchUserActions } from './user'
import { watchBoardActions } from './board'

export default function* rootSaga() {
	yield all([
		watchUserActions(),
		watchBoardActions(),
	])
}