import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { Sidebar } from "../../../components/journal/Sidebar";
import { starLogout } from "../../../actions/auth";
import { startNewNote } from "../../../actions/notes";

jest.mock("../../../actions/auth", () => ({
  starLogout: jest.fn(),
}));
jest.mock("../../../actions/notes", () => ({
  startNewNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    uid: "VICkecLNvBgQBqEkUDvG8WhQQoj2",
    name: "Emanuel",
  },
  notes: {
    notes: [
      {
        id: "1Ejt8OOgzpOemCON2ObG",
        date: 1634317290704,
        title: "Puto mencho",
        url: "https://res.cloudinary.com/djythc5li/image/upload/v1634317308/s4czvcyqzs9xp0ur6elm.jpg",
        body: "chingas a tu madre y me pelas la verga",
      },
    ],
    active: null,
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  </Provider>
);

beforeEach(() => {
  store = mockStore(initState);
  jest.clearAllMocks();
});

describe("Pruebas en Sidebar", () => {
  test("Sidebar debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de llamar startLogout", () => {
    wrapper.find(".btn").prop("onClick")();
    expect(starLogout).toHaveBeenCalled();
  });
  test("debe de llamar el startNewNote", () => {
    wrapper.find(".journal__new-entry").prop("onClick")();
    expect(startNewNote).toHaveBeenCalled();
  });
});
