import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-migracion',
  templateUrl: './migracion.component.html',
  styleUrls: ['./migracion.component.scss']
})
export class MigracionComponent implements OnInit {

  constructor() { }

  fechaNacimiento: Date = new Date();
  opcionRol: string = "p";

  opcion: any[] = [
    { value: "p", label: "Profesor"},
    { value: "e", label: "Estudiante"},
  ]

  loginFormGroup = new FormGroup({
    nombre: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    apellido: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    
    // nombre_responsable_editar: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    // numero_responsable_editar: new FormControl('', { validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)], updateOn: 'blur' })
  });

  
  ngOnInit() {
  }

}
