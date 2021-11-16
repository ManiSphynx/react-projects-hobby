import { retornaArreglo } from "../../pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("retornaArreglo debe retornar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");
    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
