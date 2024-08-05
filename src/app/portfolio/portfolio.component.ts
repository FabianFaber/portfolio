import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, FeedbackComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
