import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Pruebas en LoginScreen", () => {
  //wrapper //mount
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );
  test("LoginScreen debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de ejecutar el setUser con el argumento esperado", () => {
    wrapper.find("button").prop("onClick")();
    expect(setUser).toHaveBeenCalledWith({
      id: 123,
      name: "Emanuel Romero Madrigal",
    });
  });
});
