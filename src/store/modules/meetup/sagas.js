import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import history from "../../../services/history";

import {
  meetupCancelationSuccess,
  meetupFailure,
  meetupCreationSuccess,
  meetupUpdateSuccess
} from "./actions";

export function* meetupCreation({ payload }) {
  const { data } = payload;

  try {
    yield call(api.post, "meetups", data);

    toast.success("Meetup criada com sucesso");
    history.push("/dashboard");
    yield put(meetupCreationSuccess());
  } catch (err) {
    toast.error("Erro na criacao, tente novamente");
    yield put(meetupFailure());
  }
}
export function* meetupCancelation({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`);

    toast.success("Meetup cancelado");
    history.push("/dashboard");
    yield put(meetupCancelationSuccess(id));
  } catch (err) {
    toast.error("Nao foi possivel cancelar");
    yield put(meetupFailure());
  }
}

export function* meetupUpdate({ payload }) {
  try {
    const { data } = payload;

    const response = yield call(api.put, `meetups/${data.id}`, data);

    toast.success("Meetup atualizada");
    history.push("/dashboard");
    yield put(meetupUpdateSuccess(response.data));
  } catch (err) {
    toast.error("Ocorreu um erro durante a atualizacao");
    yield put(meetupFailure());
  }
}
export default all([
  takeLatest("@meetup/CANCELATION_REQUEST", meetupCancelation),
  takeLatest("@meetup/CREATION_REQUEST", meetupCreation),
  takeLatest("@meetup/UPDATE_REQUEST", meetupUpdate)
]);
