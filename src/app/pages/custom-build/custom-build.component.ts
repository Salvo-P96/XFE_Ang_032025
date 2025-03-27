import { Component, inject, HostListener,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { VariableBinding } from '@angular/compiler';
import { customCar } from '../../../Models/customCar';

@Component({
  selector: 'app-custom-build',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  templateUrl: './custom-build.component.html',
  styleUrl: './custom-build.component.scss'
})
export class CustomBuildComponent {
  
  // customBuild = new customCar();

  carForm: FormGroup;

  selectFormControl = new FormControl('', Validators.required);

  constructor(private router: Router, private route: ActivatedRoute) {
    this.carForm = new FormGroup({
      brand: new FormControl('', [Validators.required]), 
      model: new FormControl('', [Validators.required]),  
      configuration: new FormControl('', [Validators.required]),
      fuel: new FormControl('', [Validators.required]), 

      color: new FormControl('', [Validators.required]),
      finish: new FormControl('', [Validators.required]),
      rimType: new FormControl('', [Validators.required]),
      rimSize: new FormControl('', [Validators.required]),

      seatMaterial: new FormControl('', [Validators.required]),
      seatColor: new FormControl('', [Validators.required]),
      upholsteryColor: new FormControl('', [Validators.required]),
      trimType: new FormControl('', [Validators.required]),

      displaySize: new FormControl('', [Validators.required]),
      displayHeadsUp: new FormControl('', [Validators.required]),
      autopilot: new FormControl('', [Validators.required])
    });
  }
   
  


  ngOnInit(): void {
    const element:HTMLElement|null = document.getElementById('mainNav');

    if (element){
      element.style.display='block';
    } 
  }
  toggleMenu(): void {
    const menu: HTMLElement|null = document.querySelector('.dropdown-menu');
    menu?.classList.toggle('show');
    console.log(menu)
  }
  test(){
    console.log(this.carForm.value)
  }
submit():void{
//------------Logica per il passaggio al riepilogo-------------//
}

}
