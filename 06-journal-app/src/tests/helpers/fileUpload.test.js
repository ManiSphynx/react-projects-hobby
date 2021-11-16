import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "djythc5li",
  api_key: "357215312352863",
  api_secret: "I0JW_JbBzJoSxC2RWyf7nRadeyU",
  secure: true,
});

jest.setTimeout(30000);

describe("Pruebas en fileUpload", () => {
  test("debe de cargar un archivo y retornar una url", async () => {
    const resp = await fetch(
      "https://res.cloudinary.com/djythc5li/image/upload/v1634327050/jrqgvk04uozpeunics0a.png"
    );
    const blob = await resp.blob();

    const file = new File([blob], "foto.png");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    const segments = url.split("/");
    const imgId = segments[segments.length - 1].replace(".png", "");

    await cloudinary.v2.api.delete_resources(imgId);
  });
  test("debe de retornar un error", async () => {
    const file = new File([], "foto.png");
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
