const { Sequelize, Model} = require("sequelize");
const db = require('./index');
const sequelize = db.sequelize;

class Student extends Model {}
Student.init(
  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING(15),
      allowNull: false,
      validate: {
        max: 15,
        min: 3,
        is:{
            args: /^[A-Za-z_\s]+$/g,
            msg: 'Solo puede ingresar letras y espacio'
        }
      }
    },
    apellido: {
      type: Sequelize.STRING(15),
      allowNull: false,
      validate:{
        is:{
            args: /^[A-Za-z_\s]+$/g,
            msg: 'Solo puede ingresar letras y espacio'
        }
      }
    },
    edad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate:{
          is:{
              args: /^[0-9]*$/g,
              msg: 'Solo puede ingresar Numeros'
          }
        }
      },
      carrera: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate:{
          is:{
              args: /^[A-Za-z_\s]+$/g,
              msg: 'Solo puede ingresar letras y espacio'
          }
        }
      },

      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate:{
          is:{
              args:/^[A-Za-z0-9_.-]+@[ A-Za-z0-9_.-]+\.[a-zA-Z]{2,4}$/g,
              msg: 'Correo no valido'
          }
        }
      },
     
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'alumnos'
  }
);

module.exports = Student;

 module.exports.getStudents = async (id) => {
     return await Student.findOne({attributes:['id','nombre','apellido','edad','carrera','email'],where: { id }}).then( student => { return student;});
 };
