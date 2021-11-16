import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { NoteScreen } from "../../../components/notes/NoteScreen";
import { activeNote } from "../../../actions/notes";

jest.mock("../../../actions/notes", () => ({
  activeNote: jest.fn(),
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
    active: {
      id: "1Ejt8OOgzpOemCON2ObG",
      title: "Puto mencho",
      body: "chingas a tu madre y me pelas la verga",
      date: 1634317290704,
      url: "https://res.cloudinary.com/djythc5li/image/upload/v1634317308/s4czvcyqzs9xp0ur6elm.jpg",
    },
  },
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <NoteScreen />
    </MemoryRouter>
  </Provider>
);

beforeEach(() => {
  store = mockStore(initState);
  jest.clearAllMocks();
});

describe("Pruebas en NoteScreen", () => {
  test("NoteScreen debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de disparar el activeNote", () => {
    wrapper.find('input[name="title"]').simulate("change", {
      target: {
        name: "title",
        value: "Hola de nuevo",
      },
    });

    expect(activeNote).toHaveBeenCalledWith("1Ejt8OOgzpOemCON2ObG", {
      id: "1Ejt8OOgzpOemCON2ObG",
      title: "Hola de nuevo",
      body: "chingas a tu madre y me pelas la verga",
      date: 1634317290704,
      url: "https://res.cloudinary.com/djythc5li/image/upload/v1634317308/s4czvcyqzs9xp0ur6elm.jpg",
    });
  });
});
