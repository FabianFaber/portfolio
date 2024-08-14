import { Component, inject } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, FeedbackComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  translate = inject(TranslationService);
projects: any;
}