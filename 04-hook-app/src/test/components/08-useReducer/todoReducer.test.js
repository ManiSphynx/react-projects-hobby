import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});

    expect(state).toEqual(demoTodos);
  });

  test("debe de agregar un todo", () => {
    const newTodo = {
      id: 3,
      desc: "Aprender Express",
      done: false,
    };

    const newState = todoReducer(demoTodos, { type: "add", payload: newTodo });
    expect(newState.length).toBe(3);
    expect(newState.includes(newTodo)).toBe(true);
  });
  test("debe de borrar un todo", () => {
    const idTodo = 2;
    const newState = todoReducer(demoTodos, {
      type: "delete",
      payload: idTodo,
    });

    expect(newState.length).toBe(1);
    expect(newState).toEqual([demoTodos[0]]);
  });
  test("debe de hacer toogle del todo", () => {
    const idTodo = 2;
    const changeState = todoReducer(demoTodos, {
      type: "toggle",
      payload: idTodo,
    });

    expect(changeState).not.toEqual(demoTodos);
    expect(changeState[1].done).toBe(true);
  });
});
