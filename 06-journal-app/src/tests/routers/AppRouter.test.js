import { mount } from "enzyme";
import { act } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { login } from "../../actions/auth";
import { AppRouter } from "../../routers/AppRouter";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import "@testing-library/jest-dom";

jest.mock("../../actions/auth", () => ({
  login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
  notes: {
    active: {
      id: "abdc",
    },
    notes: [],
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

describe("Pruebas en AppRouter", () => {
  test("debe de llamar el login si estoy autenticado", async () => {
    let user;

    await act(async () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>
      );
    });

    const auth = getAuth();
    const userCred = await signInWithEmailAndPassword(
      auth,
      "test@testing.com",
      "123456"
    );
    user = userCred.user;

    expect(login).toHaveBeenCalled();
  });
});