import { fetchConToken, fetchSinToken } from "../../helpers/fetch";

describe("Pruebas en el helper fetch", () => {
  let token = "";

  test("Pruebas en fetchSinToken", async () => {
    const RESP = await fetchSinToken(
      "auth",
      {
        email: "empresa24@gmail.com",
        password: "estefi12",
      },
      "POST"
    );

    expect(RESP instanceof Response).toBe(true);

    const BODY = await RESP.json();

    expect(BODY.ok).toBe(true);

    token = BODY.token;
  });

  test("Pruebas en fetchConToken", async () => {
    localStorage.setItem("token", token);

    const RESP = await fetchConToken(
      "events/6175c64c43018489d24f93eb",
      {},
      "DELETE"
    );

    const BODY = await RESP.json();

    expect(BODY.msg).toBe("El evento no existe");
  });
});
