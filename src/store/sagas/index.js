import { all, takeLatest } from 'redux-saga/effects';

import { Types as AlbumsTypes } from './../ducks/app';

import { search } from './app';

export default function* rootSaga() {
  return yield all([takeLatest(AlbumsTypes.GET_REQUEST, search)]);
}
