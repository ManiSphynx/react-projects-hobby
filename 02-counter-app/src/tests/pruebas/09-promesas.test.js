import heroes from "../../datos/heroes";
import { getHeroeByIdAsync } from "../../pruebas/09-promesas";

describe("Pruebas con 09-promesas", () => {
  test("Debe retornar un heroe async", () => {
    const id = 1;

    return getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
    });
  });
  test("Debe retornar un error si no encuentra el id", (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
