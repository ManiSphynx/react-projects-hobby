import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe("Pruebas en RealExampleRef", () => {
  const wrapper = shallow(<RealExampleRef />);

  test("RealExampleRef Debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el componente <MultipleCustomHooks />", () => {
    const btn = wrapper.find("button");
    btn.simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
