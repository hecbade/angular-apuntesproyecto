const mongoose = require ('mongoose')
const {Schema} = mongoose;

const empleadosEsquema = new Schema ({

    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    departamento: { type: String, required: true },
    salario: { type: Number, required: true }

});

module.exports = mongoose.model ('Empleado', empleadosEsquema);