/*** @jest-environment node */
import { deleteDoc, disableNetwork, doc, getDoc } from "@firebase/firestore";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  starUploading,
} from "../../actions/notes";
import { db } from "../../firebase/firebase-config";
import { fileUpload } from "../../helpers/fileUpload";
import { types } from "../../types/types";

jest.mock("../../helpers/fileUpload", () => {
  return {
    fileUpload: () => {
      return Promise.resolve("CualquierLink.jpg");
    },
  };
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  auth: {
    uid: "TEST__USER",
  },
  notes: {
    active: {
      id: "2LLpIG8TaNfYfFYDZLcp",
      title: "Hola bb",
      body: "Mundo",
    },
  },
};

global.scrollTo = jest.fn();

let store = mockStore(initState);

describe("Pruebas con las acciones de notes", () => {
  afterAll(() => {
    disableNetwork(db);
  });

  beforeEach(() => {
    store = mockStore(initState);
  });

  test("startNewNote debe de crear una nueva nota", async () => {
    await store.dispatch(startNewNote());
    const action = store.getActions();

    expect(action[0]).toEqual({
      type: types.notesActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(action[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    await deleteDoc(
      doc(db, "TEST__USER", "journal", "notes", `${action[0].payload.id}`)
    );
  });

  test("startLoadingNotes debe cargar las notas", async () => {
    await store.dispatch(startLoadingNotes("TEST__USER"));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };

    expect(actions[0].payload[0]).toMatchObject(expected);
  });
  test("starSaveNote debe de actualizar la nota", async () => {
    const note = {
      id: "tBXrkkUCf4IcP5CsodyI",
      title: "Estoy cachonda",
      body: "body",
    };

    await store.dispatch(startSaveNote(note));
    const actions = store.getActions();

    expect(actions[0].type).toBe(types.notesUpdated);

    const getDocumentRef = await getDoc(
      doc(db, "TEST__USER", "journal", "notes", `${note.id}`)
    );

    expect(getDocumentRef.data().title).toBe(note.title);
  });
  test("starUploading debe de actualizar el url del entry", async () => {
    const file = [];
    await store.dispatch(starUploading(file));

    const getDocumentRef = await getDoc(
      doc(db, "TEST__USER", "journal", "notes", "2LLpIG8TaNfYfFYDZLcp")
    );

    expect(getDocumentRef.data().url).toBe("CualquierLink.jpg");
  });
});
