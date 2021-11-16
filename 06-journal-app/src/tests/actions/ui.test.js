import {
  finishLoading,
  removeError,
  setError,
  startLoading,
} from "../../actions/ui";
import { types } from "../../types/types";

describe("Pruebas en ui", () => {
  test("Todas las acciones deben de crearse", () => {
    const action = setError("Help");
    expect(action).toEqual({
      type: types.uiSetError,
      payload: "Help",
    });
    const removeErroAction = removeError();
    const startLoadingAction = startLoading();
    const finishLoadingAction = finishLoading();
    expect(removeErroAction).toEqual({
      type: types.uiRemoveError,
    });
    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading,
    });
    expect(finishLoadingAction).toEqual({
      type: types.uiFinishLoading,
    });
  });
});
