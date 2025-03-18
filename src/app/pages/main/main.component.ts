import { Component } from '@angular/core';
import { ButtonRackComponent } from '../../components/button-rack/button-rack.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-main',
  imports: [ButtonRackComponent,
            CarouselComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
