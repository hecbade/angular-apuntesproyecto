import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class empleadosServices {

  empleadoSeleccionado : Empleado;
  empleados: Empleado[];
  URL = 'http://localhost:3000/api/empleados/';

  constructor(private http: HttpClient) {

    this.empleadoSeleccionado = new Empleado();
    this.empleados = [];
  }

  mostrarEmpleados(){
    return this.http.get(this.URL)
  }

  mostrarEmpleado(id:string){
    return this.http.get(this.URL + id)
  }

  crearEmpleado(Empleado:Empleado){
    return this.http.post(this.URL,Empleado)
  }

  actualizarEmpleado(Empleado:Empleado){
    return this.http.put(this.URL + Empleado.id, Empleado);
  }

  borrarEmpleados(id:string){
    return this.http.delete(this.URL + id)
  }

}
