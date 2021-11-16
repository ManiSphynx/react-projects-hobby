import { types } from "../../types/types";

describe("Pruebas en types.js", () => {
  test("Verificando que types sea igual a un objeto con data", () => {
    const objeto = {
      login: "[Auth] Login",
      logout: "[Logout] Logout",
      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",
      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",
      notesAddNew: "[Notes] New note",
      notesActive: "[Notes] Set active note",
      notesLoad: "[Notes] Load notes",
      notesUpdated: "[Notes] Update note",
      notesFileUrl: "[Notes] Updated image url",
      notesDelete: "[Notes] Delete note",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    };
    expect(types).toEqual(objeto);
  });
});
