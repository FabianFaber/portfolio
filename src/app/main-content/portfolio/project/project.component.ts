import { Component, inject } from '@angular/core';
import { Project } from '../../../interface/project';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  translate = inject(TranslationService);

  projects:
    Project[] = [
      {
        name: 'Join',
        image: './../../../assets/img/projects/join.png',
        type: 'HTML | CSS | Firebase',
        description: this.translate.instant('portfolioJoin'),
        link: {
          liveTest: 'http://join.fabian-faber.de',
          github: 'https://github.com/FabianFaber/JOIN',
        },
      },
      {
        name: 'El Polo Loco',
        image: './../../../assets/img/projects/polo_loco.png',
        type: 'JavaScript | HTML | CSS',
        description: this.translate.instant('portfolioLoco'),
        link: {
          liveTest: 'http://pololoco.fabian-faber.de',
          github: 'https://github.com/FabianFaber/Polo_Loco',
        },
      },
      {
        name: 'Simple CRM',
        image: './../../../assets/img/projects/crm.png',
        type: 'Angular | Firebase',
        description: this.translate.instant('portfolioCrm'),
        link: {
          liveTest: 'http://simplecrm.fabian-faber.de',
          github: 'Looking Good!',
        },
      },
      {
        name: 'Pokédex',
        image: './../../../assets/img/projects/pokedex.png',
        type: 'JavaScript | HTML | CSS | Api',
        description: this.translate.instant('portfolioPoke'),
        link: {
          liveTest: 'http://pokedex.fabian-faber.de',
          github: 'https://github.com/FabianFaber/pokedex',
        },
      }
    ]
  }