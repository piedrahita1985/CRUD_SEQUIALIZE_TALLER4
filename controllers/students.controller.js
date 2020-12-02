const { validationResult } = require('express-validator');

const config = require('../config/global.config');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Student = require('../models/students');

exports.registrar = (req, res, next)=>{
  const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const carrera = req.body.carrera;
    const email = req.body.email;

    bcrypt
    .hash(nombre, 12)
    .then(hashedPw => {
      const student = new Student({
        
        nombre,
        apellido,
        edad,
        carrera,
        email
      });
      return student.save();
    })
    .then(result => {
      res.status(201).json({ message: 'Student created!' });
    })
    .catch(err => {
      const error = new Error('Student created failed.');
      error.statusCode = 422;
      error.data = error;
      throw error;
    });
    
};


exports.consultar = (req, res, next) => {
  const id = req.body.id;

  let loadedStudent;
  Student.findOne({where: { id }})
    .then(student => {
 
      if (!student) {
        const error = new Error('El Estudiante no fue encontrado.');
        error.statusCode = 401;
        throw error;
      }
      
      res.status(200).json(student)
    })
    
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
  };

  exports.actualizar = (req, res, next)=>{
    const id =req.body.id;
    const nombre = req.body.nombre;
      const apellido = req.body.apellido;
      const edad = req.body.edad;
      const carrera = req.body.carrera;
      const email = req.body.email;
      let loadedStudent;
      Student.findOne({where: { id }})
        .then(student => {
        
          if (!student) {
            const error = new Error('El Estudiante no fue encontrado.');
            error.statusCode = 401;
            throw error;
          }
          
        return  student.update({
                  nombre : nombre,
                  apellido : apellido,
                 edad : edad ,
                 carrera : carrera,
                 email : email },)
          // res.status(200).json(student)
        })
              .then(result => {
        console.log(result);
        res.status(201).json({ message: 'Student update!' });
        
      })
        .catch(err => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        });  
      
  };
  
exports.eliminar = (req, res, next)=>{
  const id = req.body.id;
   

    bcrypt
    .hash(id, 12)
    .then(hashedPw => {
      const student = new Student({        
        id:id
      });
      return student.destroy({where: {id:id}});
    })
    .then(result => {
      res.status(201).json({ message: 'Student deleted!' });
    })
    .catch(err => {
      const error = new Error('Student created failed.');
      error.statusCode = 422;
      error.data = error;
      throw error;
    });
    
};

  