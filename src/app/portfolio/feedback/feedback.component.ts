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
      name: 'Michael Schuster',
      feedback: 'Michael really kept the team together with his great organization and clear communication. We wouldn\'t have got this far without his commitment.',
      role: 'Team Partner',
      image: './../../../assets/img/projects/testBild.png',
    },
    {
      name: 'John Doe',
      feedback: 'John consistently brings innovative ideas and solutions to the table. His technical expertise and dedication are unmatched.',
      role: 'Project Manager',
      image: './../../../assets/img/projects/testBild.png',
    },
  ];
}