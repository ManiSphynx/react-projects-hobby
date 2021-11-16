import { getImagen } from "../../pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("Debe retornar el url de la imagen", async () => {
    const url = await getImagen();

    expect(url.includes("https://")).toBe(true);
  });
});
