export function registerRequest() {
  return {
    type: "REGISTER_REQUEST",
  };
}

export function registerSuccess(token, data) {
  return {
    type: "REGISTER_SUCCESS",
    token: token,
    username: data.username,
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
  };
}

export function registerError(error) {
  return {
    type: "REGISTER_ERROR",
    error: error,
  };
}
