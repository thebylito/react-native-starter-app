import { call, put } from 'redux-saga/effects';
import api from './../../services/api';

import { Creators as AppActions } from './../ducks/app';

export function* search(action) {
  try {
    const response = yield call(api.get, `/songs?q=${action.payload.query}`);

    yield put(AppActions.searchSuccess(response.data));
  } catch (err) {
    yield put(AppActions.searchFailure('Erro ao buscar dados da API'));
  }
}
