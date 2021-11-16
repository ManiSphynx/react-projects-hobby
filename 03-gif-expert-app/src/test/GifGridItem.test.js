import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../components/GifGridItem";

describe("Pruebas en GrifGridItem.js", () => {
  const title = "Un titulo";
  const url = "https://www.googleapis.com";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe de tener la imagen igual url y alt de los props", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe de tener animate__fadeIn", () => {
    const div = wrapper.find("div");

    expect(div.hasClass("animate__fadeIn")).toBe(true);
  });
});
