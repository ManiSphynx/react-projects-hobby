import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  const state = {
    name: "Emanuel",
    logged: true,
  };
  test("authReducer debe de retornar el estado por defecto", () => {
    const initialState = authReducer(state, {});
    expect(initialState).toEqual(state);
  });
  test("debe de autenticar y colocar el name del usuario", () => {
    const newState = authReducer(state, {
      type: types.login,
      payload: { name: "Emanuel" },
    });

    expect(newState).toEqual(state);
  });
  test("debe de borrar el name del usuario y logged en false", () => {
    const newState = authReducer(state, {
      type: types.logout,
    });

    expect(newState.logged).toBe(false);
  });
});
