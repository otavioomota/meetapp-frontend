import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import api from "../../../services/api";
import history from "../../../services/history";

import { signInSuccess, signUpSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload.data;
    const response = yield call(api.post, "sessions", { email, password });
    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(response.data));
  } catch (err) {
    toast.error("Ocorreu um erro na autentificacao");
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  let response = null;
  try {
    const { name, email, password } = payload.data;

    response = yield call(api.post, "users", { name, email, password });

    toast.success("Usuario criado com sucesso !");
    yield put(signUpSuccess(response.data));
    history.push("/");
  } catch (err) {
    toast.error("Ocorreu um erro na criacao da conta, tente novamente !");
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

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("persist/REHYDRATE", setToken)
]);
