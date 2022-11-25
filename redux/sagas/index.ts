import { all, fork } from 'redux-saga/effects';
import { watchTasksSagas } from './tasks.saga';
import { watchUsersSagas } from './users.saga';

function* rootSaga() {
  yield all([fork(watchUsersSagas), fork(watchTasksSagas)]);
}

export default rootSaga;
