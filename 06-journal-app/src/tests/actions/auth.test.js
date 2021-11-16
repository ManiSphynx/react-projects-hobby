import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  login,
  logout,
  starLogout,
  startLoginEmailPassword,
} from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};

let store = mockStore(initState);

beforeEach(() => {
  store = mockStore(initState);
});

describe("Pruebas con las acciones de Auth", () => {
  test("login y logout deben de crear la accion respectiva", () => {
    const logOut = logout();
    const logIn = login("uiasdasdasidusa", "Emanuel");

    expect(logIn).toEqual({
      type: types.login,
      payload: {
        uid: "uiasdasdasidusa",
        displayName: "Emanuel",
      },
    });
    expect(logOut).toEqual({
      type: types.logout,
    });
  });

  test("debe de realizar el logout", async () => {
    await store.dispatch(starLogout());
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.logout,
    });
    expect(actions[1]).toEqual({
      type: types.notesLogoutCleaning,
    });
  });
  test("debe de iniciar eñ startLoginEmailPassword", async () => {
    await store.dispatch(startLoginEmailPassword("test@testing.com", "123456"));
    const actions = store.getActions();
    expect(actions[1]).toEqual({
      type: types.login,
      payload: {
        uid: "wOA5aWVrJMamnZrQ4p3oqj9hz222",
        displayName: null,
      },
    });
  });
});
