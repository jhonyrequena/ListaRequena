import { Component } from '@angular/core';

interface Alumno{
  nombre: string;
  apellido: string;
  inscripcion: Date;
  nota: number;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  alumnos: Alumno[] = [
    {
      nombre: 'Jhonnys',
      apellido: 'Requena',
      inscripcion: new Date(),
      nota: 9,
    },
    {
      nombre: 'Luis',
      apellido: 'Mariano',
      inscripcion: new Date(),
      nota: 4,
    },
    {
      nombre: 'Rosalba',
      apellido: 'Montenegro',
      inscripcion: new Date(),
      nota: 9,
    },
    {
      nombre: 'Daniela',
      apellido: 'Requena',
      inscripcion: new Date(),
      nota: 8,
    },
    {
      nombre: 'Oriana',
      apellido: 'Lezama',
      inscripcion: new Date(),
      nota: 3,
    },
    {
      nombre: 'Carlos',
      apellido: 'Carrion',
      inscripcion: new Date(),
      nota: 7,
    },
    {
      nombre: 'Arelys',
      apellido: 'Leon',
      inscripcion: new Date(),
      nota: 4,
    }
  ]
}
