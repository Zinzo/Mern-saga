import { all } from 'redux-saga/effects'
import { watchUserActions } from './user'
import { watchBoardActions } from './board'
import { watchModalActions } from './modal'

export default function* rootSaga() {
	yield all([
		watchUserActions(),
		watchBoardActions(),
		watchModalActions()
	])
}