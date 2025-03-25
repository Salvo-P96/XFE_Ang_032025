import { Component, inject, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { VariableBinding } from '@angular/compiler';

@Component({
  selector: 'app-custom-build',
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  templateUrl: './custom-build.component.html',
  styleUrl: './custom-build.component.scss'
})
export class CustomBuildComponent {

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private router: Router, private route: ActivatedRoute) {}
    
  ngOnInit(): void {
    const element:HTMLElement|null = document.getElementById('mainNav');

    if (element){
      element.style.display='block';
    } 
  }

  //-----------------------------------------------------
  isMenuVisible = false;

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  @HostListener('document:click', ['$event'])
  closeMenuIfClickedOutside(event: MouseEvent): void {
    const menu = document.querySelector('.dropdown-menu');
    const button = document.querySelector('button');
    
    if (menu && !menu.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
      this.isMenuVisible = false;
    }
  }
  //------------------------------------------------------
  // select(v:VariableBinding, s:string):void{
  //   const choice:HTMLElement|null= document.querySelector('choice');
  //   let selectedChoice = choice ? choice.innerHTML : null;
  // }
}
