import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../auth/AuthContext";

import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe("Pruebas en DashboardRoutes", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Emanuel",
    },
  };
  test("DashboardRoutes debe mostrarse correctamente", () => {
    const wrapper = mount(
      <MemoryRouter>
        <AuthContext.Provider value={contextValue}>
          <DashboardRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
