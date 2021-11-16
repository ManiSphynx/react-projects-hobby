const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require("express-validator");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { Router } = require("express");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");
const router = Router();

router.use(validarJWT);

// Obtener eventos
router.get("/", getEventos);

// Crear eventos
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    check("end", "La fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

// Actualizar eventos
router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    check("end", "La fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);

// Borrar eventos
router.delete("/:id", eliminarEvento);

module.exports = router;
