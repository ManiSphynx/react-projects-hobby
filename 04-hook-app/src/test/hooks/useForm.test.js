import React from "react";
import { renderHook, act } from "@testing-library/react-hooks/dom";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Emanuel",
    email: "emmanuel@gmail.com",
  };

  test("debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current[0]).toEqual(initialForm);
    expect(typeof result.current[1]).toBe("function");
    expect(typeof result.current[2]).toBe("function");
  });

  test("debe de cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: "Melissa" });
  });

  test("debe restablecer los valores del form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Melissa",
        },
      });
      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
