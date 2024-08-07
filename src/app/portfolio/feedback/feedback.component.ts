import { Component } from '@angular/core';
import { Feedback } from '../../interface/feedback';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedbacks: Feedback[] = [
    {
      name: 'Okan Özel',
      feedback: 'Fabian is distinguished by his exceptional diligence and strong work ethic. His team-oriented approach consistently fosters a positive and productive atmosphere. Particularly impressive are his outstanding JavaScript skills, which he effectively applies to our projects. Thanks to his technical expertise and dedication, we have achieved numerous successes. It has been a pleasure working with Fabian – he is undoubtedly an invaluable asset to our team.',
      role: 'Team Partner',
      image: './../../../assets/img/projects/testBild.png',
    },
    {
      name: 'Daniela O.',
      feedback: 'I was really fortunate to be on a team with Fabian at DA. Working with him is straightforward and well-structured. Thanks to the excellent communication within the team and his tireless dedication, we were able to achieve our goal on schedule and successfully complete our project. He is an outstanding teammate, and I would welcome the opportunity to work on more projects with him. I wish him all the best for the future.',
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
