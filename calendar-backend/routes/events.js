// Event routes
// /api/events

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { check } = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router();

// Obtener eventos y deben tener validacion de jwt
router.use(validarJWT);

router.get('/', getEventos);

// Crear evento
router.post('/',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha final es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento);

// Actualizar evento
router.put('/:id', [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha final es obligatoria').custom(isDate),
    validarCampos
], actualizarEvento);

// Actualizar evento
router.delete('/:id', eliminarEvento);

module.exports = router;