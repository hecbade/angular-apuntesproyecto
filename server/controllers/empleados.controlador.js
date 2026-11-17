
const empleadosModels = require('../models/empleados');

const controladorEmpleado = {};

controladorEmpleado.mostrarEmpleados = async (req, res) => {
    const leerEmpleados = await empleadosModels.find();
    res.json(leerEmpleados);
};

controladorEmpleado.mostrarEmpleado = async (req, res) => {
    const buscarEmpleado = await empleadosModels.findById(req.params.id);
    res.json(buscarEmpleado);

controladorEmpleado.mostrarEmpleado = async (req, res) => {
    console.log(req.params.id);

    const buscarEmpleado = await empleadosModels.findById(req.params.id);
    res.json(buscarEmpleado);
};

};

controladorEmpleado.crearEmpleado = async (req, res) => {
    const nuevoEmpleado = new empleadosModels(req.body);

    await nuevoEmpleado.save();

    res.json('EMPLEADO GUARDADO');
};

controladorEmpleado.editarEmpleado = async (req, res) => {

  const { id } = req.params;

  const empleadoEditar = {
    nombre : req.body.nombre,
    cargo : req.body.cargo,
    departamento :req.body.departamento,
    salario : req.body.salario,
    
  }

  await empleadosModels.findByIdAndUpdate(id, {$set:empleadoEditar}, {new: true})

  res.json('EMPLEADO ACTUALIZADO');

};

controladorEmpleado.borrarEmpleado = async (req, res) => {
  const { id } = req.params;

  const empleadoEditar = {
    nombre : req.body.nombre,
    cargo : req.body.cargo,
    departamento :req.body.departamento,
    salario : req.body.salario,
    
  }

  await empleadosModels.findByIdAndDelete(id, {$set:empleadoEditar}, {new: true})

  res.json('EMPLEADO ACTUALIZADO');

};

module.exports = controladorEmpleado;
