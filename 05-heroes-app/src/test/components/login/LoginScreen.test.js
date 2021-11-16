import { LoginScreen } from "../../../components/login/LoginScreen";
import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";

describe("Pruebas en LoginScreen", () => {
  const historyMock = {
    replace: jest.fn(),
  };
  const dispatch = jest.fn();

  const wrapper = mount(
    <AuthContext.Provider value={{ dispatch }}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de realizar el dispatch y la navegacion", () => {
    const hanldeClick = wrapper.find("button").prop("onClick");

    hanldeClick();
    expect(dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        name: "Emanuel",
      },
    });
    expect(historyMock.replace).toHaveBeenCalledWith("/");
    localStorage.setItem("lastPath", "/dc");
    hanldeClick();
    expect(historyMock.replace).toHaveBeenCalledWith("/dc");
  });
});
