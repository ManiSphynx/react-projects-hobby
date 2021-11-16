import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import { JournalEntry } from "../../../components/journal/JournalEntry";
import { activeNote } from "../../../actions/notes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
  id: 155,
  date: 0,
  title: "hola",
  body: "mundo",
  url: "https://equisvidios.com",
};

const wrapper = mount(
  <Provider store={store}>
    <MemoryRouter>
      <JournalEntry {...note} />
    </MemoryRouter>
  </Provider>
);

describe("Pruebas en JournalEntry", () => {
  test("JournalEntry debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe d eactivar la nota", () => {
    wrapper.find(".journal__entry").prop("onClick")();
    expect(store.dispatch).toHaveBeenCalledWith(
      activeNote(note.id, { ...note })
    );
  });
});
