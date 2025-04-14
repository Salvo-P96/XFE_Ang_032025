import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EventService } from '../../Services/event.service';
import { CarBuildService } from '../../Services/car-build.service';
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
  styleUrl: './custom-build.component.scss',
})
export class CustomBuildComponent {
  carForm: FormGroup;

  selectFormControl = new FormControl('', Validators.required);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService,
    private carBuildService: CarBuildService
  ) {
    this.carForm = new FormGroup({
      brand: new FormControl('RollsRoyce', [Validators.required]),
      model: new FormControl('Spectre', [Validators.required]),
      configuration: new FormControl('Black Badge', [Validators.required]),
      fuel: new FormControl('Electric', [Validators.required]),

      color: new FormControl('Vapour Violet', [Validators.required]),
      finish: new FormControl('Crystal', [Validators.required]),
      rimType: new FormControl('Led Illuminated', [Validators.required]),
      rimSize: new FormControl('26"', [Validators.required]),

      seatMaterial: new FormControl('Alcantara', [Validators.required]),
      seatColor: new FormControl('Black', [Validators.required]),
      upholsteryColor: new FormControl('Black', [Validators.required]),
      trimType: new FormControl('Mahogany', [Validators.required]),

      displaySize: new FormControl('22"', [Validators.required]),
      displayHeadsUp: new FormControl(true),
      autopilot: new FormControl(true),
    });
  }

  ngOnInit(): void {
    const element: HTMLElement | null = document.getElementById('mainNav');

    if (element) {
      element.style.display = 'block';
    }
  }
  toggleMenu(): void {
    const menu: HTMLElement | null = document.querySelector('.dropdown-menu');
    menu?.classList.toggle('show');
    console.log(menu);
  }

  submit(): void {
    this.eventService.emitSummary(true);

    if (this.carForm.valid) {
      const build = new customCar();
      (build.brand = this.carForm.value.brand),
        (build.model = this.carForm.value.model),
        (build.configuration = this.carForm.value.configuration),
        (build.fuel = this.carForm.value.fuel),
        (build.color = this.carForm.value.color),
        (build.finish = this.carForm.value.finish),
        (build.rimType = this.carForm.value.rimType),
        (build.rimSize = this.carForm.value.rimSize),
        (build.seatMaterial = this.carForm.value.seatMaterial),
        (build.seatColor = this.carForm.value.seatColor),
        (build.upholsteryColor = this.carForm.value.upholsteryColor),
        (build.trimType = this.carForm.value.trimType),
        (build.displaySize = this.carForm.value.displaySize),
        (build.displayHeadsUp = this.carForm.value.displayHeadsUp),
        (build.autopilot = this.carForm.value.autopilot);

      console.log(build);

      this.carBuildService.saveBuild(build);
      console.log('Build salvata con successo!');
    }
  }
}
