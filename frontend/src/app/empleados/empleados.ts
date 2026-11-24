import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { empleadosServices } from '../servicios/empleadosServices';
import { Empleado } from '../models/empleado';

@Component({
  imports: [FormsModule],
  selector: 'app-empleados',
  styleUrl: './empleados.css',
  templateUrl: './empleados.html',
  providers: [empleadosServices],
})
export class Empleados {

  constructor(
    public empleadosServices: empleadosServices
  ){}

  addEmployee(form: NgForm){
    console.log(form.value)

    this.empleadosServices.crearEmpleado(form.value).subscribe(res => {
      console.log(res);
    });
  }
  resetForm(form:NgForm){
    if (form){
      form.reset()
      this.empleadosServices.empleadoSeleccionado = new Empleado();
    }

  }
}
