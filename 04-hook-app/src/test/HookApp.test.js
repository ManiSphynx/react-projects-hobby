import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Pruebas en HookApp", () => {
  test("Probando que se muestre correctamente HookApp", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
