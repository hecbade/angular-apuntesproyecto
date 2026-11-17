const express = require ('express');
const router = express.Router();

const emplcontrol = require ('../controllers/empleados.controlador');

router.get('/', emplcontrol.mostrarEmpleados);

router.post('/',emplcontrol.crearEmpleado);

router.get('/:id',emplcontrol.mostrarEmpleado);

router.put('/:id',emplcontrol.editarEmpleado);

router.delete('/:id',emplcontrol.borrarEmpleado);

  // RESPONSE DE APRENDIZAJE:

  //  res.json({
  //  status: 'Hola Mundo'
  //  });

module.exports = router;
