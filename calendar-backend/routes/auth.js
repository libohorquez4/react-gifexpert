// Rutas de usuarios / Auth
// host + /api/auth

// usuario mongo db lisandro pwd Pnzrtrp3n0#
// connection string
// mongodb+srv://lisandro:<password>@cluster0.bsh7szq.mongodb.net/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

const { validarCampos } = require('../middlewares/validar-campos');

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post('/new',
    [
        // middlewares
        check('name', 'Nombre obligatorio').not().isEmpty(),
        check('email', 'Email obligatorio').isEmail(),
        check('password', 'Contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos,
    ],
    crearUsuario
);

router.post('/',
    [
        // middlewares
        check('email', 'Email obligatorio').isEmail(),
        check('password', 'Contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos,
    ],
    loginUsuario);

// router.get('/renew',
//     [
//         // middlewares
//         check('email', 'Email obligatorio').isEmail(),
//         check('password', 'Contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
//     ],
//     revalidarToken);

router.get('/renew',
    [
        // middlewares
        // check('email', 'Email obligatorio').isEmail(),
        // check('password', 'Contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
        validarJWT
    ],
    revalidarToken);


module.exports = router;