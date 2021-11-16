import { getHeroeById, getHeroesByOwner } from "../../pruebas/08-imp-exp";
import heroes from "../../datos/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("debe de retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });
  test("debe de retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("debe de retornar un arreglo con los heroes de DC", () => {
    const owners = "DC";
    const heroe = getHeroesByOwner(owners);
    const heroeOwner = heroe.filter((h) => h.owner === owners);

    expect(heroe).toEqual(heroeOwner);
  });

  test("debe de retornar un arreglo con los heroes de Marvel", () => {
    const owners = "Marvel";
    const heroe = getHeroesByOwner(owners);
    const heroeOwner = heroe.filter((h) => h.owner === owners);

    expect(heroe.length).toBe(heroeOwner.length);
  });
});
