import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en el CounterApp", () => {
  let wrapper = shallow(<CounterApp />); // No perder el intelinsense

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Verificando que se muestre correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Cambiando los valores por defecto", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const textoH2 = wrapper.find("h2").contains(100);

    expect(textoH2).toBe(true);
  });

  test("Debe de incrementar con el boton +", () => {
    wrapper.find("button").at(0).simulate("click");
    const textoH2 = wrapper.find("h2").text().trim();

    expect(textoH2).toBe("11");
  });

  test("Debe de decrementar con el boton -", () => {
    wrapper.find("button").at(2).simulate("click");
    const textoH2 = wrapper.find("h2").text().trim();

    expect(textoH2).toBe("9");
  });

  test("Debe de colocar el valor por defecto", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const textoH2 = wrapper.find("h2").text().trim();

    expect(textoH2).toBe("105");
  });
});
