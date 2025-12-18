import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AnimatedTooltipComponent, TooltipItem } from '../animated-tooltip/animated-tooltip.component';
import { TechStackComponent } from "../tech-stack/tech-stack.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, AnimatedTooltipComponent, TechStackComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  instructors: TooltipItem[] = [
    {
      id: 1,
      name: "Carlos Méndez",
      designation: "Instructor de Frontend",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      name: "Ana García",
      designation: "Instructora de Backend",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      name: "Luis Torres",
      designation: "Instructor de DevOps",
      image: "https://i.pravatar.cc/150?img=33"
    },
    {
      id: 4,
      name: "María Rodríguez",
      designation: "Instructora de UI/UX",
      image: "https://i.pravatar.cc/150?img=9"
    },
    {
      id: 5,
      name: "Pedro Sánchez",
      designation: "Instructor de Bases de Datos",
      image: "https://i.pravatar.cc/150?img=15"
    },
    {
      id: 6,
      name: "Laura Martínez",
      designation: "Instructora de Mobile",
      image: "https://i.pravatar.cc/150?img=44"
    }
  ];

  constructor(private router: Router) {}

  onExploreCourses(): void {
    this.router.navigate(['/courses']);
  }

  onGetStarted(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/auth/register']);
  }
}