import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  test("authReducer debe retornar el estado por defecto", () => {
    const state = {};
    const reducer = authReducer(state, {});

    expect(reducer).toEqual(state);
  });
  test("authReducer debe modificar el state y asignar name y uid del usuario", () => {
    const state = {
      uid: "VICkecLNvBgQBqEkUDvG8WhQQoj2",
      name: "Emanuel",
    };
    const action = {
      type: types.login,
      payload: {
        uid: "VICkecLNvBgQBqEkUDvG8WhQQoj2",
        displayName: "Emanuel",
      },
    };
    const newReducer = authReducer(state, action);

    expect(newReducer).toEqual(state);
  });
  test("authReducer debe retornar un nuevo estado como un objeto vacio", () => {
    const state = {
      uid: "VICkecLNvBgQBqEkUDvG8WhQQoj2",
      name: "Emanuel",
    };
    const action = {
      type: types.logout,
    };
    const newReducer = authReducer(state, action);
    expect(newReducer).toEqual({});
  });
  test("si authReducer recibe una accion no reconocida debe retornar el state por defecto", () => {
    const state = {
      uid: "VICkecLNvBgQBqEkUDvG8WhQQoj2",
      name: "Emanuel",
    };
    const action = {
      type: types.hack,
    };
    const newReducer = authReducer(state, action);
    expect(newReducer).toEqual(state);
  });
});
