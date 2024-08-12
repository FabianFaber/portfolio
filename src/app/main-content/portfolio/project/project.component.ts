import { Component } from '@angular/core';
import { Project } from '../../../interface/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects:
    Project[] = [
      {
        name: 'Join',
        image: './../../../assets/img/projects/join.png',
        type: 'HTML | CSS | Firebase',
        description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        link: {
          liveTest: 'John',
          github: 'Looking Good!',
        },
      },
      {
        name: 'El Polo Loco',
        image: './../../../assets/img/projects/polo_loco.png',
        type: 'JavaScript | HTML | CSS',
        description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
        link: {
          liveTest: 'John',
          github: 'Looking Good!',
        },
      },
      {
        name: 'Simple CRM',
        image: './../../../assets/img/projects/crm.png',
        type: 'Angular | Firebase',
        description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
        link: {
          liveTest: 'John',
          github: 'Looking Good!',
        },
      },
      {
        name: 'Pokédex',
        image: './../../../assets/img/projects/pokedex.png',
        type: 'JavaScript | HTML | CSS | Api',
        description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
        link: {
          liveTest: 'John',
          github: 'Looking Good!',
        },
      }
    ]
  }