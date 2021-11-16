import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("pruebas en TodoListItem", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  let wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar la funcion borrar", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test("debe de llamar la funcion handleToggle", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe de mostrar el texto correctamente", () => {
    const p = wrapper.find("p").text();

    expect(p).toBe("1 . Aprender React");
    expect(typeof p).toBe("string");
  });
  test("debe de tener la clase complete si el todo esta en true", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const hook = shallow(<TodoListItem todo={todo} />);

    expect(hook.find("p").hasClass("complete")).toBe(true);
  });
});
