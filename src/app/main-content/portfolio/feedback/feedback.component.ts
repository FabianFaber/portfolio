import { Component, inject } from '@angular/core';
import { Feedback } from '../../../interface/feedback';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  translate = inject(TranslationService);

  feedbacks: Feedback[] = [
    {
      name: 'Okan Özel',
      feedback: this.translate.instant('feedbackOkan'),
      role: 'Team Partner',
      image: './../../../assets/img/projects/testBild.png',
    },
    {
      name: 'Daniela O.',
      feedback: this.translate.instant('feedbackDaniela'),
      role: 'Team Partner',
      image: './../../../assets/img/projects/testBild.png',
    },
  ];

  currentFeedbackIndex: number = 0;

  get currentFeedback() {
    return this.feedbacks[this.currentFeedbackIndex];
  }

  nextFeedback() {
    this.currentFeedbackIndex = (this.currentFeedbackIndex + 1) % this.feedbacks.length;
  }

  prevFeedback() {
    this.currentFeedbackIndex = (this.currentFeedbackIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
  }

  setFeedbackIndex(index: number) {
    this.currentFeedbackIndex = index;
  }
}
