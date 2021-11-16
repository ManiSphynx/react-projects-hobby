import { getUser, getUsuarioActivo } from "../../pruebas/05-funciones";

describe("Pruebas en 02-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const nombre = "Emanuel";

    const activoTest = { uid: "ABC567", username: nombre };
    const activoUser = getUsuarioActivo(nombre);

    expect(activoUser).toEqual(activoTest);
  });
});
