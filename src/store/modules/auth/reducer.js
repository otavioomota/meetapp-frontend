import { produce } from "immer";

const INITIAL_STATE = {
  token: null,
  loading: false,
  signed: false
};
export default function authReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@auth/SIGN_IN_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_IN_SUCCESS": {
        draft.token = action.payload.token;
        draft.loading = false;
        draft.signed = true;
        break;
      }
      case "@auth/SIGN_UP_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@auth/SIGN_UP_SUCCESS": {
        draft.loading = false;
        break;
      }
      case "@auth/SIGN_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@auth/LOGOUT": {
        draft.token = null;
        draft.signed = false;
        break;
      }

      default:
        break;
    }
  });
}
