export const addCredentials = (username, password) => ({
  type: "LOGIN_REQUEST",
  payload: {username, password}
});
