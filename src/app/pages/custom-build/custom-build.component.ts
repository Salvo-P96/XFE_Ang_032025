import { Component, inject, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { VariableBinding } from '@angular/compiler';
import { Customcar } from '../../../Models/CustomBuild';

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

  selectFormControl = new FormControl('', Validators.required);
  constructor(private router: Router, private route: ActivatedRoute) {}
    
  ngOnInit(): void {
    const element:HTMLElement|null = document.getElementById('mainNav');

    if (element){
      element.style.display='block';
    } 
  }

  //-----------------------------------------------------
  toggleMenu(): void {
    const menu: HTMLElement|null = document.querySelector('.dropdown-menu');
    menu?.classList.toggle('show');
    console.log(menu)
  }
  test(){
    console.log(this.selectFormControl.value)
  }
  brand:string="";

}
