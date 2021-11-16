import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { eventStartDelete } from "../../../actions/events";
import { DeletedEventFab } from "../../../components/ui/DeletedEventFab";

jest.mock("../../../actions/events", () => ({
  eventStartDelete: jest.fn(),
}));

const middlwares = [thunk];
const mockStore = configureStore(middlwares);

const initState = {};
const store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <DeletedEventFab />
  </Provider>
);

describe("Pruebas en DeleteEventFab", () => {
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de llamar la funcion al hacer click", () => {
    wrapper.find("button").prop("onClick")();
    expect(eventStartDelete).toHaveBeenCalled();
  });
});
