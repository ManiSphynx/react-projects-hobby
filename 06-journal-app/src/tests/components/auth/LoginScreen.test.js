import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { LoginScreen } from "../../../components/auth/LoginScreen";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../../../actions/auth";

jest.mock("../../../actions/auth", () => ({
  startGoogleLogin: jest.fn(),
  startLoginEmailPassword: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {},
  ui: {
    loading: false,
    msgError: null,
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

beforeEach(() => {
  store = mockStore(initState);
  jest.clearAllMocks();
});

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <LoginScreen />
    </MemoryRouter>
  </Provider>
);

describe("Pruebas en LoginScreen", () => {
  test("<LoginScreen  /> debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de disparar la accion de  startGoogleLogin", () => {
    wrapper.find(".google-btn").prop("onClick")();
    expect(startGoogleLogin).toHaveBeenCalled();
  });
  test("debe de disparar la accion startLoginEmailPassword con sus argumentos", () => {
    wrapper.find("form").prop("onSubmit")({ preventDefault() {} });
    expect(startLoginEmailPassword).toHaveBeenCalledWith(
      "joe@example.com",
      "123456"
    );
  });
});
