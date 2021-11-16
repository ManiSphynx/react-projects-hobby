import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../components/GifGrid";
import { useFetchGifs } from "../hooks/useFetchGifs";
jest.mock("../hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const category = "Categoria";
  test("Probar que GifGrid se muestre correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "http://localhost/cualquier/cosa.jpg",
        title: "Hola mundo",
      },
      {
        id: "123",
        url: "http://localhost/cualquier/co785475sa.jpg",
        title: "Hola mundo",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
