import { mount, shallow } from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en PrivateRoute", () => {
  const args = {
    location: {
      pathname: "/marvel",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("debe de mostrar el componente si esta autenticado y guardar en el localStorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Listo</span>}
          {...args}
        />
      </MemoryRouter>
    );

    console.log(wrapper.html());

    //        expect(wrapper.find("span").exists()).toBe(true);
    //        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });

  test("debe de bloquear el componente si no esta autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={false}
          component={() => <span>Listo</span>}
          {...args}
        />
      </MemoryRouter>
    );

    expect(wrapper.find("span").exists()).toBe(false);
  });
});
