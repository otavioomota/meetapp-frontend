import { all, takeLatest, call, put } from "redux-saga/effects";
import { toast } from "react-toastify";

import { updateProfileSuccess, updateProfileFailure } from "./actions";
import api from "../../../services/api";

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    const userUpdated = yield call(api.put, "users", profile);

    toast.success("Dados atualizados");

    yield put(updateProfileSuccess(userUpdated.data));
  } catch (err) {
    toast.error("Erro ao atualizar. Confira seus dados");
    yield put(updateProfileFailure());
  }
}
export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
