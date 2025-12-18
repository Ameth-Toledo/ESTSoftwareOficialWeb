import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { TechLanguagesGridComponent } from "../../components/tech-languages-grid/tech-languages-grid.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, HeaderComponent, TechLanguagesGridComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
