export function moreDetails(meetup) {
  return {
    type: "@meetup/MORE_DETAILS",
    payload: { meetup }
  };
}

export function meetupCancelationRequest(id) {
  return {
    type: "@meetup/CANCELATION_REQUEST",
    payload: { id }
  };
}

export function meetupCancelationSuccess() {
  return {
    type: "@meetup/CANCELATION_SUCCESS"
  };
}

export function createMeetupPage() {
  return {
    type: "@meetup/CREATE_PAGE"
  };
}

export function meetupCreationRequest(data) {
  return {
    type: "@meetup/CREATION_REQUEST",
    payload: { data }
  };
}

export function meetupCreationSuccess(data) {
  return {
    type: "@meetup/CREATION_SUCCESS"
  };
}

export function meetupUpdateRequest(data) {
  return {
    type: "@meetup/UPDATE_REQUEST",
    payload: { data }
  };
}

export function meetupUpdateSuccess(data) {
  return {
    type: "@meetup/UPDATE_SUCCESS",
    payload: { data }
  };
}

export function meetupFailure() {
  return {
    type: "@meetup/FAILURE"
  };
}
