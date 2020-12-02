const express  = require("express");
const { body } = require("express-validator");

const Student = require("../models/students");
const studentController = require("../controllers/students.controller");

const router = express.Router();

router.post(
  "/registrar",
  [
    body("nombre")
      .isLength({ min: 3, max: 15 })
      .withMessage("El nombre es minimo 3 caracteres maximo 15")
      .matches(/^[A-Za-z_\s]+$/, "i")
      .withMessage("El nombre debe ser alfabetico")
      .exists()
      .withMessage("El nombre es requerido")
      .trim()
      .escape(),

    body("apellido")
      .isLength({ min: 3, max: 15 })
      .withMessage("Los apellidos son minimo 3 caracteres maximo 15")
      .matches(/^[A-Za-z_\s]+$/, "i")
      .withMessage("Los apellidos deben ser alfabeticos")
      .exists()
      .withMessage("Los apellidos son requeridos")
      .trim()
      .escape(),

      body("edad")
      .isLength({ min: 0, max: 3 })
      .withMessage("La edad es minimo 0 caracteres maximo 3")
      .matches(/^[0-9]*$/, "i")
      .withMessage("La edad debe ser numerica")
      .exists()
      .withMessage("La edad es requerida")
      .trim()
      .escape(),

      body("carrera")
      .isLength({ min: 3, max: 50 })
      .withMessage("La carrera es minimo 3 caracteres maximo 50")
      .matches(/^[A-Za-z_\s]+$/, "i")
      .withMessage("La carrera deben ser alfabetico")
      .exists()
      .withMessage("La carrera es requerida")
      .trim()
      .escape(),

      body("email")
      .isLength({ min:10 , max: 50 })
      .withMessage("La carrera es minimo 10 caracteres maximo 50")
      .matches(/^[A-Za-z0-9_.-]+@[ A-Za-z0-9_.-]+\.[a-zA-Z]{2,4}$/, "i")
      .withMessage("El Email debe ser alfa numerico")
      .exists()
      .withMessage("El Email es requerida")
      .trim()
      .escape(),
  ],
  studentController.registrar
);

router.post(
    "/consultar",
    [
        body("id")
        .isLength({ min: 0, max: 3 })
        .withMessage("La edad es minimo 0 caracteres maximo 3")
        .matches(/^[0-9]*$/, "i")
        .withMessage("El id debe ser numerico")
        .exists()
        .withMessage("el id es requerido")
        .trim()
        .escape(),
    ],
    
    studentController.consultar
    );

    router.post(
        "/actualizar",
        [
            body("id")
            .isLength({ min: 0, max: 3 })
            .withMessage("La edad es minimo 0 caracteres maximo 3")
            .matches(/^[0-9]*$/, "i")
            .withMessage("El id debe ser numerico")
            .exists()
            .withMessage("el id es requerido")
            .trim()
            .escape(),

          body("nombre")
            .isLength({ min: 3, max: 15 })
            .withMessage("El nombre es minimo 3 caracteres maximo 15")
            .matches(/^[A-Za-z_\s]+$/, "i")
            .withMessage("El nombre debe ser alfabetico")
            .exists()
            .withMessage("El nombre es requerido")
            .trim()
            .escape(),
      
          body("apellido")
            .isLength({ min: 3, max: 15 })
            .withMessage("Los apellidos son minimo 3 caracteres maximo 15")
            .matches(/^[A-Za-z_\s]+$/, "i")
            .withMessage("Los apellidos deben ser alfabeticos")
            .exists()
            .withMessage("Los apellidos son requeridos")
            .trim()
            .escape(),
      
            body("edad")
            .isLength({ min: 0, max: 3 })
            .withMessage("La edad es minimo 0 caracteres maximo 3")
            .matches(/^[0-9]*$/, "i")
            .withMessage("La edad debe ser numerica")
            .exists()
            .withMessage("La edad es requerida")
            .trim()
            .escape(),
      
            body("carrera")
            .isLength({ min: 3, max: 50 })
            .withMessage("La carrera es minimo 3 caracteres maximo 50")
            .matches(/^[A-Za-z_\s]+$/, "i")
            .withMessage("La carrera deben ser alfabetico")
            .exists()
            .withMessage("La carrera es requerida")
            .trim()
            .escape(),
      
            body("email")
            .isLength({ min:10 , max: 50 })
            .withMessage("La carrera es minimo 10 caracteres maximo 50")
            .matches(/^[A-Za-z0-9_.-]+@[ A-Za-z0-9_.-]+\.[a-zA-Z]{2,4}$/, "i")
            .withMessage("El Email debe ser alfa numerico")
            .exists()
            .withMessage("El Email es requerida")
            .trim()
            .escape(),
        ],
        studentController.actualizar
      );
      


module.exports = router;