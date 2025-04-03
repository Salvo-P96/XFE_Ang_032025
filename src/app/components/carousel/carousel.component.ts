import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  slideIndex: number = 0;
  slides: HTMLElement[] = [];

  ngOnInit(): void {
    this.slides = Array.from(document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>);
    this.carousel();
  }
  
  carousel(): void {
    // this.slides[0].style.display = "grid";
    setInterval(() => {
      this.slides.forEach((slide) => {
        slide.style.display = 'none';
      });

      this.slideIndex++;

      if (this.slideIndex > this.slides.length) {
        this.slideIndex = 1;
      }

      this.slides[this.slideIndex - 1].style.display = 'grid';
    }, 3000);
  }
}
