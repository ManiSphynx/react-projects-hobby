import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en TodoAdd", () => {
  const handleAddTodo = jest.fn();
  let wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
  });
  test("TodoAdd debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("el formulario no debe de llamar handleAddTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("debe de llamar la funcion handleAddTodo", () => {
    const value = "Aprender react";
    wrapper
      .find("input")
      .simulate("change", { target: { value, name: "description" } });

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
      desc: value,
      done: false,
      id: expect.any(Number),
    });

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
