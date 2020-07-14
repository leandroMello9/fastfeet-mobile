import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
 
  try {
    const { id } = payload;
    const idUser = id
    const response = yield call(api.post, 'sessionsId', {
      idUser
    });
    console.log(response.data)

    const { token, user } = response.data;
   
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    // history.push('/dashboard');
  } catch (err) {
    console.log(err)
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login,verifique seus dados'
    );

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  const { name, email, password } = payload;
  try {
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });
    // history.push('/');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro,verifique os dados informados'
    );

    yield put(signFailure());
  }
}
export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
export function singOut() {
  // history.push('/');
}
export default all([
  // Toda vez que escutar a action @auth/SIGN_IN_REQUEST
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/LAGOUT_USER', singOut),
]);
