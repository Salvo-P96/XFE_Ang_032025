import { Component } from '@angular/core';
import { ButtonRackComponent } from '../../components/button-rack/button-rack.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ItemSliderComponent } from '../../components/item-slider/item-slider.component';

@Component({
  selector: 'app-main',
  imports: [ButtonRackComponent,
            CarouselComponent,
            ItemSliderComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
