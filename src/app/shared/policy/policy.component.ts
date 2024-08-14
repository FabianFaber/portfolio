import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
