import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks/dom";

describe("Pruebas en useCounter", () => {
  test("Debe de retornar valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("Debe de tener el counter en 100", () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test("Debe de incrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
    });

    const { counter } = result.current;

    expect(counter).toBe(11);
  });

  test("Debe decrementar el counter en 1", () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
    });

    const { counter } = result.current;

    expect(counter).toBe(9);
  });

  test("Debe establecer los valores por defecto", () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, increment } = result.current;

    act(() => {
      increment();
      reset();
    });

    const { counter } = result.current;

    expect(counter).toBe(100);
  });
});
