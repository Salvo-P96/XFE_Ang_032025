import { Component } from '@angular/core';
import { RouterOutlet,  ActivatedRoute ,Router } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            MainComponent,
            NavbarComponent,
            FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularPRJ-01';

  constructor(private router: Router, private route: ActivatedRoute) {}
    
    ngOnInit(): void {
      const element:HTMLElement|null = document.getElementById('mainNav');
  
      if (!this.isAppMainPage() && element){
        element.style.display='none';
      } 
  }

  isAppMainPage(): boolean {
    return this.router.url.includes('');
  }

}
